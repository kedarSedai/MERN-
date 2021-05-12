import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {} from 'dotenv/config'

import postRoutes from './routes/posts.js';
const app = express();

app.use('/posts', postRoutes);

const port = process.env.PORT || 3000;

app.use(express.json({limit: "30mb", extended:true }));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//DATABASE CONNECTION
mongoose
    .connect(process.env.DB, ({useCreateIndex: true, useUnifiedTopology:true, useNewUrlParser:true}))
    .then(() => console.log("Database Connected !!!"))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running at ${port}`));

