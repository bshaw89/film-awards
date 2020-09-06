import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results";
import Nominations from "./Nominations";


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
    setNominate(oldNominate => [...oldNominate, movie])
    console.log('Nominate Obj.', nominate);
    // is saving to its own state for each movie...
    // need it to join together
  }
  
  return (
    <Fragment>
      <header className="logo">
        {/* <img src="images/brand.png" alt="Brand" /> */}
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <div className='flex-grid'>
          <div className='col'>
            <Results results={results} nominater={nominater} />
          </div>
          <div className='col'>
            <Nominations nominate={nominate}/>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
