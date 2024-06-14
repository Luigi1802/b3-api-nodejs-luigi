import {USERS} from "../data.js";

const getAllUsers = (req, res) => {
    res.json(USERS);
};

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    let user = USERS.find((user) => {
        return user.id === parseInt(userId);
    });
    if (!user) {
        res.status(404).json({ message : "user not found"});
    }
    res.json(user);
};

const createUser = (req, res) => {
    const {name, firstname} = req.body;
    if (!name || !firstname) {
        res.status(400).json({message : "missing info in body"});
    }
    
    const newUser = {
        id: USERS.length+1,
        name: name,
        firstname: firstname
    };

    USERS.push(newUser);
    res.status(201).json(newUser);
}

const userController = {
    getAllUsers, getUserById, createUser
};

export default userController;