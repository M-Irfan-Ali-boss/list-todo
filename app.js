import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config();

import listRoutes from './routes/ListRoutes.js';
import todoRoutes from './routes/TodoRoutes.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4200;

//Routes
app.use('/api/v1/list', listRoutes);
app.use('/api/v1/todo', todoRoutes);

app.listen(
  port,
  mongoose
    .connect(process.env.MONGOOSE_URI)
    .then(() =>
      console.log(
        `Database connected and Server is up and running on http://localhost:${port}/`
      )
    )
    .catch((error) => console.log(error))
);
