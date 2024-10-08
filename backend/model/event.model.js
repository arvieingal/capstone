import db from '../config/db.js';  

// Get all events
const events = {

getAll: () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT _id, event_title, start, end, description, location, attendees FROM events', (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
},

// Create a new event
create: async (eventData) => {
  const { summary, start, end, description, location } = eventData;
  
  // Updated SQL query to match the new structure
  const query = `
    INSERT INTO events
    (summary, start, end, description, location) 
    VALUES (?, ?, ?, ?, ?)
  `;
  
  try {
    const result = await db.query(query, [
      summary,
      start,
      end,
      description,
      location
    ]);
    
    // The database will automatically generate the id
    return { id: result.insertId, summary, start, end, description, location };
    
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
},

// Update an event
update: (id, eventData) => {
  const { event_title, start, end, description, location, attendees } = eventData;
  return new Promise((resolve, reject) => {
    db.query('UPDATE events SET event_title = ?, start = ?, end = ?, description = ?, location = ?, attendees = ? WHERE _id = ?', 
      [event_title, startDate, endDate, description, location, attendees, id], 
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.changedRows > 0);
      }
    );
  });
},

// Delete an event
delete: (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM events WHERE _id = ?', [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.affectedRows > 0);
    });
  });
}
};

// Example implementation of getEvents
export const getEvents = (callback) => {
  // Your database query logic here
  // Call callback(err, results) based on the query result
};

export default events;