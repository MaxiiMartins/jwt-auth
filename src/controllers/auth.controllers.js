const bcrypt = require('bcrypt');
const { Users } = require('../db');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const isEmailExist = await Users.findOne({ where: { email } })
        if (!isEmailExist) res.status(404).send(`Email no registrado`)
        else if (!await bcrypt.compare(password, isEmailExist.password)) res.status(404).send(`Password incorrecto`)
        else {
            const token = jwt.sign({
                user_id: isEmailExist.id,
                fullname: isEmailExist.fullname,
                email: isEmailExist.email
                },JWT_SECRET,
                { expiresIn: "1000" })
            
            res.cookie("ftoken", token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "none",
                maxAge: 2000,
              })
            res.status(200).json({
                response:isEmailExist
            })
        }

    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

module.exports = {
    loginControllers
}