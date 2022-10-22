const {Router} = require("express")
const { Users } = require('../db');
const bcrypt = require('bcrypt');

const router = Router()


router.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const isEmailExist = await Users.findOne({where:{email}})
    console.log(await bcrypt.compare(password, isEmailExist.password))
    if(!isEmailExist) res.status(404).send(`Email no registrado`)
    else if(!await bcrypt.compare(password, isEmailExist.password)) res.status(404).send(`Password incorrecto`)
    else res.status(200).send(`Bienvenido ${isEmailExist.fullname}`)
})

module.exports = router