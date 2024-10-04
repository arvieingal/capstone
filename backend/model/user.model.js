import db from '../config/db.js';  // Import the database connection

import bcrypt from 'bcryptjs';

const User = {
  getAllUsers: (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, callback);
  },

  getUserById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], callback);
  },

  // createUser: (userData, callback) => {
  //   const query = 'INSERT INTO users SET ?';
  //   db.query(query, userData, callback);
  // },


  createUser: async (userData) => {
    const {
      fullName,         
      username,
      email,
      phoneNo,
      role,
      status,
      employmentStatus,
      addressMunicipality,
      barangay,
      sitio,
      password,        
      agreeTerms
    } = userData;
    
    // Hash the password before inserting it into the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds, adjust as needed
    
    // Updated SQL query to match the new structure
    const query = `
      INSERT INTO users 
      (full_name, username, email, phone_number, role, status, employment_status, municipality, barangay, sitio, password, terms) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    try {
      const result = await db.query(query, [
        fullName,
        username,
        email,
        phoneNo,
        role,
        status,
        employmentStatus,
        addressMunicipality,
        barangay,
        sitio,
        hashedPassword,  
        agreeTerms
      ]);
      
      console.log(result);  
      return result.insertId; 
      
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
  },
  
  
  
  updateUser: (id, userData, callback) => {
    const query = 'UPDATE users SET ? WHERE id = ?';
    db.query(query, [userData, id], callback);
  },

  deleteUser: (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], callback);
  },
};

export default User;
