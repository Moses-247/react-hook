// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://via.placeholder.com/150', rating: 5 },
    { title: 'The Matrix', description: 'A sci-fi classic', posterURL: 'https://via.placeholder.com/150', rating: 4.5 },
  ]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRating === '' || movie.rating >= filterRating)
  );

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <div className="App">
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      <form onSubmit={addMovie}>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;
