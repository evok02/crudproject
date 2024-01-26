

// user model
let users = [
    {
        id : 1,
        name : "Hlib Tereshchenko",
        stud_id: "23/1/0855/049",
        photo: "hlib.jpg"
    },
    {
        id : 2,
        name : "Denys Mashevskyi",
        stud_id: "23/1/0855/033",
        photo: "den4ik.jpg" 
    },
    {
        id: 3, 
        name : "Arsenii Kobelianskyi",
        stud_id: "23/1/0855/028",
        photo: "arsen.jpg" 
    },
    {
        id: 4, 
        name : "Vlas Okseniuk",
        stud_id: "23/1/0855/038",
        photo: "vlas.jpg" 
    },
    {
        id: 5,
        name : "Liberts Leo",
        stud_id: "23/1/0855/029",
        photo: "leo.jpg"

    }
    
];

function getUsers() {
    return users
}



function getUser(id) {
    let user = users.find(element => element.id === parseInt(id));
    if(typeof user !== "undefined") {
        return user;
    }else {
        return "User not found"
    }
}



function deleteUser(id) {
    users = users.filter(element => element.id !== parseInt(id));
}

function addUser(user) {
    users.push(user);
}

function updateUser(id, user) {
    let index = users.findIndex(element => element.id === parseInt(id));
    users[index].name = user.name;
    users[index].stud_id = user.stud_id;
}
module.exports = {
    getUsers,
    getUser,
    deleteUser,
    addUser,
    updateUser
}