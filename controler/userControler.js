let User = require('../models/userModel')



let createUser = async (req, res) => {
    let { username, password, emailid } = req.body
    console.log(username, password, emailid);
    try {

        let userExist = await User.findOne({ emailid })

        console.log(userExist);

        if (userExist == null) {
            let result = await User.create({
                username,
                password,
                emailid
            })
            console.log(result);
            res.status(201).json({
                success: true,
                message: "successfully created",
            })
        } else (
            res.status(404).json({
                success: false,
                message: "email already exist",
            })
        )


    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "failed to create"
        })

    }
}
let getUser = async (req, res) => {
    try {
        let result = await User.find()
        console.log(result);
        res.status(201).json({
            success: true,
            message: "successfully find user",
            data: result
        })


    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "failed to find users",
            error
        })

    }
}
let getUserById = async (req, res) => {
    let { id } = req.params
    try {
        let result = await User.findOne({ _id: id })
        console.log(result);
        res.status(201).json({
            success: true,
            message: "successfully find user",
            data: result

        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "failed to find user"
        })

    }

}
let updateUser = async (req, res) => {
    let { id } = req.params
    let { emailid } = req.body
    try {
        let result = await User.updateOne({ _id: id }, { emailid })
        console.log(result);
        res.status(201).json({
            success: true,
            message: "successfully update user emailid"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "failed to update emailid"
        })

    }
}
let deleteUser = async (req, res) => {
    let { id } = req.params
    try {
        let result = await User.deleteOne({ _id: id })
        console.log(result);
        res.status(201).json({
            success: true,
            message: "delete user successfully"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "failed to delete user"
        })

    }
}

module.exports = { createUser, getUser, getUserById, updateUser, deleteUser } 