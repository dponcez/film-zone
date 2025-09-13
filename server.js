require('dotenv').config();

const cors = require('cors');
const axios = require('axios');
const express = require('express');

const MOVIE_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie';

const app = express();
app.use(cors());

const { API_KEY } = process.env;
const PORT = process.env.PORT || 3000;

app.get('/movies', async (req, res) => {
  try{
    const response = await axios.get(`${MOVIE_URL}`, {
      params: { api_key: API_KEY }
    });
    res.json(response.data);
  }catch(error){
    console.log(error);
    res.status(500).json({ message: '¡Error fetching movies!'})
  }
});

app.get('/search', async (req, res) => {
  const { query } = req.query;
  try{
    const response = await axios.get(`${SEARCH_API}`, {
      params: {
        api_key: API_KEY,
        query: query
      }
    });
    res.json(response.data)
  }catch(error){
    console.log(error);
    res.status(500).json({ message: '¡Error searching movies!'})
  }
});

app.listen(PORT, () => {
  try{
    console.log(`Server is listening on port ${PORT}`)
  }catch(error){
    console.log('Server initialization error!')
  }
})