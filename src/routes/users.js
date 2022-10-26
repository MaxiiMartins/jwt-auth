const { Router } = require("express")
const {allUsers,createUser} = require("../controllers/users.controllers")

const router = Router()

router.get("/", allUsers)

router.post("/", createUser)

module.exports = router