import express from 'express';
import {
    getEvents,
    updateEvent,
    deleteEvent,
    addEvent,
    createEvent,
  } from '../controller/event.controller.js';


const router = express.Router();


// Get all events
router.get('/', getEvents);
router.post('/event', createEvent);

// Add a new event
router.post('/add', addEvent);

// Update an event
router.put('/update/:id', updateEvent);

// Delete an event
router.delete('/delete/:id', deleteEvent);

export default router;
