import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results";
import Nominations from "./Nominations";
import Banner from "./Banner"


export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominate, setNominate] = useState([]);


  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${term}&apikey=85afc2fd`).then((response) => {
      setResults(response.data.Search);
    });
  }, [term, setResults])

  const nominater = function(movie) {
    console.log('nominater movie', movie.imdbID)
    if (nominate.some(e => e.imdbID === movie.imdbID)) {
      return;
    } else {
      setNominate(oldNominate => [...oldNominate, movie])
      console.log('Nominate Obj.', nominate);
    }
  }

  const denominator = function(movie) {
      // nominate.splice(movie, 1);
      // if nominate includes move, -= movie
    // is saving to its own state for each movie...
    // need it to join together
    const array = [...nominate];
    console.log(array);
    console.log(movie);
    console.log(array.indexOf(movie))
    const index = array.indexOf(movie);
    if (index !== -1) {
      array.splice(index, 1);
      setNominate(array);
    }
  }
  
  return (
    <Fragment>
      <header className="logo">
        {nominate.length >= 5 && <Banner />}
        {/* <img src="images/brand.png" alt="Brand" /> */}
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <div className='flex-grid'>
          <div className='col'>
          <div className='titles'>Results</div>
            <Results results={results} nominater={nominater} />
          </div>
          <div className='col'>
          <div className='titles'>Nominees</div>

            <Nominations nominate={nominate} denominator={denominator} />
          </div>
        </div>
      </main>
    </Fragment>
  );
}
