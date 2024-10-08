import Event from '../model/event.model.js';  // Import the Event model

// Get all events
export const getEvents = (req, res) => {
  Event.getAll() // Assuming getAll is the method in your model
    .then(results => res.json(results))
    .catch(err => res.status(500).send(err));
};

// Get event by ID
export const getEventById = (req, res) => {
  const { id } = req.params;
  Event.getEventById(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
};

// Create a new event
export const createEvent = (req, res) => {
  const eventData = req.body;
  Event.create(eventData, (err, result) => {
    if (err) {
      console.log("Error while creating event: ", err);
      return res.status(500).json({ message: "Error creating event" });
    }
    console.log("Event created successfully:", result);
    // Send a success response with the event ID
    return res.status(201).json({ message: "Event created successfully", id: result.insertId });
  });
};


// Update an event
export const updateEvent = (req, res) => {
  const { id } = req.params;
  const eventData = req.body;
  Event.update(id, eventData, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
};

// Delete an event
export const deleteEvent = (req, res) => {
  const { id } = req.params;
  Event.delete(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
};

// Add a new event
export const addEvent = (req, res) => {
  const eventData = req.body;
  Event.create(eventData, (err, result) => {
    if (err) {
      console.log("Error while adding event: ", err);
      return res.status(500).json({ message: "Error adding event" });
    }
    console.log("Event added successfully:", result);
    // Send a success response with the event ID
    return res.status(201).json({ message: "Event added successfully", id: result.insertId });
  });
};