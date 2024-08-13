import express from 'express';
import {  authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser } from '../controllers/userController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';
const userRouter = express.Router();

userRouter.route('/').post(registerUser).get(protect, admin, getUsers);
userRouter.post('/logout', logoutUser);
userRouter.post('/login', authUser)
userRouter.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
userRouter.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)

export default userRouter;
