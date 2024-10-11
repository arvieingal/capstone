import { query } from '../config/db.js';  // Import the promisified query function

const Job = {
    getAllJobs: async () => {
        const jobs = await query('SELECT * FROM jobs');
        return jobs;
    },

    addJob: async (jobData) => {
        const { job_name, description, company, location, start_date, end_date, status } = jobData;
        try {
            const result = await query(
                'INSERT INTO jobs (job_name, description, company, location, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [job_name, description, company, location, start_date, end_date, status]
            );
            return result.insertId;
        } catch (error) {
            console.error('SQL error:', error);  // Log SQL errors for debugging
            throw error;
        }
    }
};

export default Job;
