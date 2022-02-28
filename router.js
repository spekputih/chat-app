const express = require("express")
const router = express.Router()
const newUserController = require("./controllers/newUserController")
const chatController = require("./controllers/chatController")

// GET

router.get("/", newUserController.home)
router.get("/login", newUserController.getLogin)
router.get("/register", newUserController.getRegister)

// POST

router.post("/register", newUserController.register)
router.post("/login", newUserController.login)
router.post("/signout", newUserController.signOut)


// Chat related routes
router.post("/get-chat-message", chatController.getMessage)

module.exports = router