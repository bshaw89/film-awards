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
    axios.get(`https://www.omdbapi.com/?s=${term}&apikey=85afc2fd`).then((response) => {
      setResults(response.data.Search);
    });
  }, [term, setResults])

  const nominater = function(movie) {
    if (nominate.some(e => e.imdbID === movie.imdbID)) {
      return;
    } else {
      setNominate(oldNominate => [...oldNominate, movie])
    }
  }

  const denominator = function(movie) {
    const array = [...nominate];

    const index = array.indexOf(movie);

    if (index !== -1) {
      array.splice(index, 1);
      setNominate(array);
    }
  }
  
  return (
    <Fragment>
      <header className="logo">
      </header>
      <main className="box">
        {nominate.length >= 5 && <div className="banner-top"><Banner /></div>}
      <div className="brand">
        The Shoppies
      </div>
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
