let express = require('express')
let userRouter = express.Router()

const {createUser,getUser,getUserById,updateUser,deleteUser} = require('../controler/userControler')


// http://localhost:4000/user
userRouter.post('/',createUser)

userRouter.get('/',getUser)

userRouter.get('/:id',getUserById)

userRouter.put('/:id',updateUser)

userRouter.delete('/:id',deleteUser)

module.exports = userRouter