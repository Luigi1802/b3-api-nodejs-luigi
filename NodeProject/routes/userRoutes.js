import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser)

router.get('/:id', userController.getUserById);

export default router;