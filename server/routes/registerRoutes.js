const express = require("express");
const UserController = require("../controllers/userController.js");

const router = express.Router();

router.post("/register", UserController.registration);
router.post("/login", UserController.LoginUser);
router.get("/logout", UserController.Logout);
router.post("/password/forgot", UserController.forgotPass);
// router.post("/password/reset/:token", UserController.resetPass);


module.exports = router