const userModel = require("../models/userModel");
// get all users from model
function getUsers(req, res, next) {
    let users = userModel.getUsers();
    message = ""
    res.render("pages/users.ejs", {users, message});
}

// get one user from model by id
function getUser(req, res, next) {
    const user = userModel.getUser(req.params.id);
    const users = userModel.getUsers();
    message = ""
    if (user === "User not found") {
        console.log(`No user found with ID ${req.params.id}`);
        res.render("pages/users.ejs", {users, message: `No user found with this ID`});
    }
    else{
    res.render("pages/user.ejs", {message, user});}
}

// delete one user from model by id
function deleteUser(req, res, next) {
    let users = userModel.getUsers();
    const id = req.params.id;
    userModel.deleteUser(id);
    message = "User was successfully deleted!"
    users = userModel.getUsers();
    res.render("pages/users.ejs", {users,message});
}

// get max id from users
function getMaxId(users) {
    let maxId = 0;
    for (const user of users) {
        if (user.id > maxId) {
            maxId = user.id;
        }
    }
    return maxId;
}

// add user to users
function createUser(req, res, next) {
    let maxId = getMaxId(userModel.getUsers());
    let user = {photo: "def.jpg", id: maxId + 1 };
    let isValid = true;
    let message = "User was successfully created!"
    let key = ''
    for (const [entrykey, value] of Object.entries(req.body)) {
        if (!value) {
            console.log(`The ${entrykey} field is required.`);
            isValid = false;
            key = entrykey
        }
        else{
            user[entrykey] = value;
        }
    }

    if (!isValid) {
        console.log("Form validation failed.");
        message = "User wasn't created"
    }
    
    else{
        userModel.addUser(user);
        console.log("Form succeed.")
    }
    console.log(userModel.getUsers())
    res.render("pages/registration.ejs", { message: message, key: key});
}

//render registration page
function registrationButton(req,res,next){
    let users = userModel.getUsers()
    res.render("pages/registration.ejs",{users,message: "",key: ""})
}

//render edit page
function editUser(req, res, next) {
    const user = userModel.getUser(req.params.id);
    message = ""
    if (user === "User not found") { // if user not found
        console.log(`No user found with ID ${req.params.id}`);
        res.status(404).send(`No user found with ID ${req.params.id}`);
        return;
    }
    else{
    res.render("pages/update_user.ejs", {message, user});}
 }

// update user and render user page
function updateUser(req, res, next) {
    let def_user = userModel.getUser(req.params.id);
    let user = {photo: def_user.photo, id: def_user.id};
    let isValid = true;
    let message = "User was successfully updated!"
    let key = ''
    for (const [entrykey, value] of Object.entries(req.body)) {
        if (!value) {
            console.log(`The ${entrykey} field is required.`);
            isValid = false;
            key = entrykey
        } else {
            user[entrykey] = value;
        }
    }

    if (!isValid) {
        console.log("Form validation failed.");
        message = "User wasn't updated"
        res.render("pages/update_user.ejs", {message: message, key: key, user: user});
    }
    
    else{
        console.log(user)
        userModel.updateUser(req.params.id, user);
        console.log("Form succeed.")
        res.render("pages/user.ejs", {user: user, message: message});
    }
    console.log(userModel.getUsers())
    

    
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    registrationButton,
    updateUser, 
    editUser
 }