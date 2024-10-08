import dotenv from 'dotenv';

import cors from "cors";
import express from 'express';
import bodyParser from 'body-parser';  
import userRoutes from './route/user.route.js'; 
import eventRoutes from './route/event.route.js'
dotenv.config();
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// Use the routes
app.use('/api', userRoutes);
app.use('/api', eventRoutes);

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
