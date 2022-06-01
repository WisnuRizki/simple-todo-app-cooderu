const fs = require('fs')
const db = require("../config/db");

const DATA_FILE = __dirname + '/../models/data.json'
const getToDo = async (req, res) => {
    await db
   .query("select * from todos")
   .then((result) => {
     res.status(200).json({
       data: result.rows,
     });
   })
   .catch((e) => {
     console.log(e);
     res.status(500).json({
       message: "INTERNAL SERVER ERROR",
     });
   });

}

const postToDo = async (req, res) => {
    const {name,done} = req.body;

    await db
    .query(`INSERT INTO todos(name, done) VALUES('${name}', '${done}')`)
    .then((result) => {
      res.status(200).json({
        data: result.rows,
      });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: "INTERNAL SERVER ERROR",
        });
    });
    

};

const updateToDo = async (req,res) => {
    const {id} = req.params;
    const {name,done} = req.body;
    
    await db
    .query(`UPDATE todos SET "name"='${name}', done=${done} where id = ${id}; `)
    .then((result) => {
      res.status(200).json({
        data: result.rows,
      });
    })
};

const deleteTodo = async (req,res) => {
    const {id} = req.params;
    
    await db
    .query(`DELETE FROM todos WHERE id=${id}`)
    .then((result) => {
      res.status(200).json({
        data: result.rows,
      });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
          message: "INTERNAL SERVER ERROR",
        });
    });
     

}

module.exports = {
    getToDo,
    postToDo,
    updateToDo,
    deleteTodo
}