import React, { useState, useEffect } from 'react';
import Form from './Form';

export default function(props) {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  console.log('propsML:', props)
  
  // const fetchData = React.useCallback(() => {
  //   fetch(
  //     `http://www.omdbapi.com/?s=${search}&apikey=85afc2fd`)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setMovies(result.Search);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  // useEffect(() => {
  //   fetchData()
  // }, [fetchData])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
    return (
      <main className='layout'>
        {/* <Form onSubmit={fetchData} /> */}
        <section className="titles">
          <ul>
            {props.movies && props.movies.map(movie => (
              <li key={movie.imdbID}>
                {movie.Title} {`(${movie.Year})`}
              </li>
           ))}
          </ul>
        </section>
      </main>
    )
  }
// }