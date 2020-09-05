import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results";


export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${term}&apikey=85afc2fd`).then((response) => {
      console.log('r.d.r', response.data);
      setResults(response.data.Search);
    });
  }, [term, setResults])
  return (
    <Fragment>
      <header className="logo">
        {/* <img src="images/brand.png" alt="Brand" /> */}
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <div className='flex-grid'>
          <div className='col'>
            <Results results={results} />
          </div>
          <div className='col'>

          </div>
        </div>
      </main>
    </Fragment>
  );
}
