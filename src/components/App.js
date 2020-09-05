import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './App.scss';
import Form from './Form';
import MovieList from './MovieList';



function App() {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [movies, setMovies] = useState([]);

  function save(title) {
    const search = {
      title
    };
  }

  const print = function() {
    console.log("OK?");
  }

  const fetchData = useCallback(() => {
    fetch(
      `http://www.omdbapi.com/?s=${userInput}&apikey=85afc2fd`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovies(result.Search);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [userInput])

  return (
    <>
      <Form
        value={userInput} 
        onChange={event => {
          setUserInput(event.target.value)
        }}
        onSubmit={fetchData}
        />
        <MovieList movies={movies}/>
    </>
  )
  }

export default App;
