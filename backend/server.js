const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require("./routes/userRoutes");
const scrapperRoutes = require("./routes/scrapperRoutes");
const algoliaRoutes = require("./routes/quilRoutes");

const app = express();
require('dotenv').config();   

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

app.use("/user", userRoutes);
app.use("/scrapper",scrapperRoutes);
app.use("/algolia",algoliaRoutes);

app.listen(port,()=>console.log("Serving running"));