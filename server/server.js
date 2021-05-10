import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running at ${port}`));

