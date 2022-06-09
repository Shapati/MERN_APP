const express =require('express')
const { getData, postData, deleteData, updateData } = require('../controller/userController')
const { protect } = require('../middlewares/authMiddleware')
const router = express.Router()

router.route('/').get(protect,getData).post(protect,postData)
router.route('/:id').put(protect,updateData).delete(protect,deleteData)

module.exports= router