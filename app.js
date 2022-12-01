import express from 'expess';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4200;

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
