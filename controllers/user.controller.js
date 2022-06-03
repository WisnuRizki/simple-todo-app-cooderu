const fs = require('fs')
const db = require("../config/db");
const {User} = require('../models/index');
const DATA_FILE = __dirname + '/../models/data.json'

const create = async (req, res) => {
    const body = req.body;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
 
    return User.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    }).then(user => {
        res.status(200).send({
            status: "SUCCESS",
            message:"User berhasil dibuat",
        })
    }).catch(e => {
        console.log(e)
        res.status(503).send({
            status:"FAIL",
            message: "Gagal membuat user"
        })
    })
}

const findAll = async (req, res) => {
    const {email} = req.body;
 
    return User.findAll().then(user => {
        res.status(200).send({
            status: "SUCCESS",
            message:"User berhasil dibuat",
            data: user
        })
    }).catch(e => {
        console.log(e)
        res.status(503).send({
            status:"FAIL",
            message: "Gagal membuat user"
        })
    })
}

const findByEmail = async (req, res) => {
    const {email} = req.body;
 
    return User.findOne({
       where: {
           email: email
       }
    }).then(user => {
        res.status(200).send({
            status: "SUCCESS",
            message:"User berhasil dibuat",
            data: user
        })
    }).catch(e => {
        console.log(e)
        res.status(503).send({
            status:"FAIL",
            message: "Gagal membuat user"
        })
    })
}

const updateById = async (req, res) => {
    const {id} = req.params;
    
    await User.update(req.body, {
        where: {
          id: id
        }
      }).then(user => {
        res.status(200).send({
            status: "SUCCESS",
            message:"User sukses diupdate",
            data: user
        })
    }).catch(e => {
        console.log(e)
        res.status(503).send({
            status:"FAIL",
            message: "Gagal mengupdate user"
        })
    })
}

const deleteById = async (req, res) => {
    const {id} = req.params;

    await User.destroy({
        where: {
          id: id
        }
      }).then(user => {
        res.status(200).send({
            status: "SUCCESS",
            message:"User sukses dihapus",
            data: user
        })
    }).catch(e => {
        console.log(e)
        res.status(503).send({
            status:"FAIL",
            message: "Gagal menghapus user"
        })
    })
}

module.exports = {
    create,
    findByEmail,
    findAll,
    deleteById,
    updateById
}