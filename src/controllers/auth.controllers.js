const bcrypt = require('bcrypt');
const { Users } = require('../db');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

const login = async(req,res)=>{
    console.log(JWT_SECRET || "no hay")
    const {email,password} = req.body
    console.log(req.body)
    const hola = jwt.sign({
        email,
        password
    },JWT_SECRET,{expiresIn:"1000"})
    console.log(hola)
    console.log(jwt.verify(hola,JWT_SECRET))
    
    try {
        const isEmailExist = await Users.findOne({where:{email}})
        if(!isEmailExist) res.status(404).send(`Email no registrado`)
        else if(!await bcrypt.compare(password, isEmailExist.password)) res.status(404).send(`Password incorrecto`)
        else res.status(200).send(`Bienvenido ${isEmailExist.fullname}`)
    } catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}

// router.post("/register",async(req,res)=>{
//     const {fullname,email,password} = req.body
//     const isEmailExist = await Users.findOne({where:{email}})
//     if(isEmailExist) return res.status(404).send(`Email ya existe`)
//     const hashedPassword = await bcrypt.hash(password, 10)
//     const newUser = await Users.create({
//         fullname,
//         email,
//         password:hashedPassword
//     })
//     res.status(200).json({
//         message:`Usuario registrado correctamente`,
//         user:newUser
//     })

// })

const register = "ok"
module.exports = {
    login,
    register
}