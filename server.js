const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Add CORS middleware

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/films', async (req, res) => {
  try {
    const response = await axios.get('https://ghibliapi.dev/films');
    const filmsData = response.data;

    // Store filmsData in your backend storage (e.g., in-memory, database)
    // ...

    res.json(filmsData);
  } catch (error) {
    console.error('Error fetching films from the API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/characters', async (req, res) => {
  try {
    const response = await axios.get('https://ghibliapi.dev/people');
    const charactersData = response.data;

    // Store charactersData in your backend storage (e.g., in-memory, database)
    // ...

    res.json(charactersData);
  } catch (error) {
    console.error('Error fetching characters from the API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Other routes...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});