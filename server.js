require('dotenv').config();

const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(cors());

app.get('/movies', async () => {});

app.get('/search', async () => {});

app.listen(PORT, () => {
  try{
    console.log(`Server is running on port: ${PORT}`)
  }catch(error){
    console.log(`Server initialization error: ${error}`)
  }
})