// routes/residentsRoutes.js
import express from 'express';
import { getResidents, getResidentById, addResident, updateResident, deleteResident } from '../controller/resident.controller.js';

const router = express.Router();

// Define routes for CRUD operations
router.get('/residents', getResidents);
router.get('/residents/:id', getResidentById);
router.post('/residents', addResident);
router.put('/residents/:id', updateResident);
router.delete('/residents/:id', deleteResident);

export default router;
