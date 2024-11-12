import React from 'react';
import MovieSearch from './MovieSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="overlay"></div> {/* Overlay effect */}
      <header>
        <h1>Movie Search</h1>
      </header>
      <MovieSearch />
    </div>
  );
}

export default App;