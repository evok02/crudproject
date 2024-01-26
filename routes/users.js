const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userModel = require("../models/userModel");

router.get("/", userController.getUsers);
router.post("/new",userController.createUser);
router.route("/new", userController.registrationButton);
router.get("/new", userController.registrationButton)

router.get("/:id", userController.getUser);
router.post("/:id/delete", userController.deleteUser);
router.post("/:id", userController.updateUser);
router.get("/:id/edit", userController.editUser);

module.exports = router;