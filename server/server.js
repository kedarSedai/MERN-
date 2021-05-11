import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config()

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//DATABASE CONNECTION
mongoose
    .connect(process.env.DB, ({useCreateIndex: true, useUnifiedTopology:true, useNewUrlParser:true}))
    .then(() => console.log("Database Connected !!!"))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running at ${port}`));

