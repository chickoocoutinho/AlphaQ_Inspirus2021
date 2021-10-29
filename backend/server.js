const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
require('dotenv').config();   

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

app.listen(port,()=>console.log("Serving running"));