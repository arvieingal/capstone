import User from '../model/user.model.js';  // Import the User model

export const getAllUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  User.getUserById(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
};

export const createUser = (req, res) => {
  const userData = req.body;
  User.createUser(userData, (err, result) => {
    if (err) {
      console.log("Error while creating user: ", err);
      return res.status(500).json({ message: "Error creating user" });
    }
    console.log("User created successfully:", result);
    // Send a success response with the user ID
    return res.status(201).json({ message: "Signup successful", id: result.insertId });
  });
};


export const updateUser = (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  User.updateUser(id, userData, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
};
