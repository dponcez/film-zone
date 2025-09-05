require('dotenv').config();

const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000 || process.env.PORT;

const { API_KEY } = process.env;
const MOVIE_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie";

app.use(cors());

app.get('/movies', async (req, res) => {
  try{
    const response = await axios.get(MOVIE_URL, {
      params: { api_key: API_KEY }
    });
    res.json(response.data);
  }catch(error){
    console.log(error);
    res.status(500).json({ message: 'Failed to fetch movies!'});
  }
});

app.get('/search', async (req, res) => {
  const { query } = req.query;

  if(!query) {
    return res.status(400).json({ message: 'Query parameter is required!'});
  }

  try{
    const response = await axios.get(SEARCH_API, {
      params: {
        api_key: API_KEY,
        query: query
      }
    });
    res.json(response.data);
  }catch(error){
    console.log(error);
    res.status(500).json({ message: 'Error searching movies!'})
  }
});

app.listen(PORT, () => {
  try{
    console.log(`Server is running on port: ${PORT}`)
  }catch(error){
    console.log(`Server initialization error: ${error}`)
  }
})