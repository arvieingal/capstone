import express from 'express';
import {  addJob, getAllJobs } from '../controller/job.controller.js';

const router = express.Router();


router.post('/jobs', addJob);
router.get('/jobs', getAllJobs);


export default router;
