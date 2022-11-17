import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import bugRoutes from './routes/bug.js';
import userRoutes from './routes/users.js';
import loginRoutes from './routes/auth.js';

const app = express();
dotenv.config();

//middleware
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

//Routes
app.use('/posts', postRoutes);
app.use('/bugs',bugRoutes);
app.use('/api/auth',loginRoutes);
app.use('/api/signup',userRoutes);

const PORT = process.env.PORT || 5000;

//Database Connection
mongoose.connect(process.env.CONNECTION_URL)
    .then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch( (error) => console.log(error.message));
