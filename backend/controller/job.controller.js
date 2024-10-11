import Job from '../model/job.model.js';

export const addJob = async (req, res) => {
    try {
        const jobData = req.body;
        const jobId = await Job.addJob(jobData);
        res.status(201).json({ message: 'Job added', jobId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add job' });
    }
};

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.getAllJobs();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
};