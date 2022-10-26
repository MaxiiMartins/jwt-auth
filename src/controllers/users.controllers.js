const bcrypt = require('bcrypt');
const { Users } = require('../db');

const allUsers = async (req, res) => {
    try {
        const allUser = await Users.findAll()
        res.status(200).json({
            title: "Lista de usuarios",
            users: allUser
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

const createUser = async (req, res) => {

    try {
        const { fullname, email, password} = req.body
        const isEmailExist = await Users.findOne({ where: { email } })
        if (isEmailExist) return res.status(404).send(`Email ya existe`)
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await Users.create({
            fullname,
            email,
            password: hashedPassword
        })
        res.status(200).json({
            message: `Usuario registrado correctamente`,
            user: newUser
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

module.exports = {
    allUsers,
    createUser
}