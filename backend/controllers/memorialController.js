const Memorial = require('../models/Memorial');

// Create a new memorial
exports.createMemorial = async (req, res) => {
  try {
    // Retrieve the memorial details from the request body
    const memorialData = req.body;

    // Create a new memorial using the Memorial model
    const newMemorial = await Memorial.create(memorialData);

    res.status(201).json({ memorial: newMemorial });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating memorial' });
  }
};

// Get all memorials of a specific user
exports.getMemorialsByUser = async (req, res) => {
  try {
    // Retrieve the userId parameter from the request
    const { userId } = req.params;

    // Find all memorials that belong to the specified user
    const memorials = await Memorial.find({ user: userId });

    res.status(200).json({ memorials });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving memorials' });
  }
};

// Get a specific memorial of a specific user
exports.getMemorialByUser = async (req, res) => {
  try {
    // Retrieve the userId and memorialId parameters from the request
    const { userId, memorialId } = req.params;

    // Find the memorial that belongs to the specified user and has the specified memorialId
    const memorial = await Memorial.findOne({ _id: memorialId, user: userId });

    if (!memorial) {
      return res.status(404).json({ message: 'Memorial not found' });
    }

    res.status(200).json({ memorial });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving memorial' });
  }
};

// Delete a memorial
exports.deleteMemorial = async (req, res) => {
  try {
    // Retrieve the memorialId parameter from the request
    const { memorialId } = req.params;

    // Delete the memorial with the specified memorialId
    await Memorial.deleteOne({ _id: memorialId });

    res.status(200).json({ message: 'Memorial deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting memorial' });
  }
};

// Update a memorial
exports.updateMemorial = async (req, res) => {
  try {
    // Retrieve the memorialId parameter from the request
    const { memorialId } = req.params;

    // Retrieve the updated memorial details from the request body
    const updatedMemorialData = req.body;

    // Update the memorial with the specified memorialId
    const updatedMemorial = await Memorial.findByIdAndUpdate(memorialId, updatedMemorialData, {
      new: true,
      runValidators: true
    });

    if (!updatedMemorial) {
      return res.status(404).json({ message: 'Memorial not found' });
    }

    res.status(200).json({ memorial: updatedMemorial });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating memorial' });
  }
};
