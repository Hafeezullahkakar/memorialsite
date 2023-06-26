const express = require('express');
const router = express.Router();
const memorialController = require('../controllers/memorialController');

// Create a new memorial
router.post('/memorials', memorialController.createMemorial);

// Get all memorials of a specific user
router.get('/users/:userId/memorials', memorialController.getMemorialsByUser);

// Get a specific memorial of a specific user
router.get('/users/:userId/memorials/:memorialId', memorialController.getMemorialByUser);

// Delete a memorial
router.delete('/memorials/:memorialId', memorialController.deleteMemorial);

// Update a memorial
router.put('/memorials/:memorialId', memorialController.updateMemorial);

module.exports = router;
