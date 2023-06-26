const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    // Retrieve the user details from the request body
    const userData = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.json({ message: 'Email already exists',user:existingUser });
    }

    // Create a new user using the User model
    const newUser = await User.create(userData);

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    // Find all users
    const users = await User.find();

    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

// Get a specific user
exports.getUser = async (req, res) => {
  try {
    // Retrieve the userId parameter from the request
    const { userId } = req.params;

    // Find the user with the specified userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving user' });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    // Retrieve the userId parameter from the request
    const { userId } = req.params;

    // Delete the user with the specified userId
    await User.deleteOne({ _id: userId });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    // Retrieve the userId parameter from the request
    const { userId } = req.params;

    // Retrieve the updated user details from the request body
    const updatedUserData = req.body;

    // Update the user with the specified userId
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
      runValidators: true
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user' });
  }
};
