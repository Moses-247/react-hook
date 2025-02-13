import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
      posterURL: "https://example.com/inception.jpg",
      rating: 9,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    // Adding more movies
  ]);

  const handleFilter = (filter) => {
    // Implement filter logic here
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div className="app">
        <h1>My Movie App</h1>
        <Filter onFilter={handleFilter} />
        <Switch>
          <Route exact path="/" component={() => <MovieList movies={movies} />} />
          <Route path="/movie/:id" component={() => <MovieDetail movies={movies} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
