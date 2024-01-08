const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const favouriteFilms = [];

app.get('/favourites', (req, res) => {
  res.json(favouriteFilms);
});

app.post('/favourites', (req, res) => {
  const film = req.body;
  favouriteFilms.push(film);
  res.json({ success: true, film });
});

app.delete('/favourites/:filmId', (req, res) => {
  const filmId = req.params.filmId;
  const index = favouriteFilms.findIndex((film) => film.id === filmId);

  if (index !== -1) {
    const removedFilm = favouriteFilms.splice(index, 1);
    res.json({ success: true, film: removedFilm[0] });
  } else {
    res.status(404).json({ success: false, error: 'Film not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});