const {Router} = require("express")
const {login,register} = require("../controllers/auth.controllers")

const router = Router()


router.post("/login",login)


module.exports = router