const {Router} = require("express")
const {loginControllers} = require("../controllers/auth.controllers")

const router = Router()


router.post("/login",loginControllers)


module.exports = router