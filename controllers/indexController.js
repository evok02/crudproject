const userModel = require("../models/userModel");

function getUsers(req, res, next) {
    const users = userModel.getUsers(); // extract users from model
    res.render("pages/home.ejs", {users}); // render home.ejs
}

module.exports = {
    getUsers,
}