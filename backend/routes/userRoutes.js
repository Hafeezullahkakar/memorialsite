const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getUsers);

// Get a specific user
router.get('/users/:userId', userController.getUser);

// Delete a user
router.delete('/users/:userId', userController.deleteUser);

// Update a user
router.put('/users/:userId', userController.updateUser);

module.exports = router;
