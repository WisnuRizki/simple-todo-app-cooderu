const express = require('express')
const router = express.Router()

const {create,findByEmail,findAll,deleteById,updateById} = require('../controllers/user.controller')

router.post('/', create);
router.post('/find', findByEmail);
router.get('/findAll', findAll);
router.delete('/delete/:id',deleteById);
router.put('/update/:id',updateById);
module.exports = router;