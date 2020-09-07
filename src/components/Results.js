import React, { useState } from "react";

import Movie from "./Movie";
import Nominations from "./Nominations";
import Nominated from "./Nominated";

export default function Results(props) {
  // const [nominate, setNominate] = useState([]);
  const results = props.results;
  console.log('RESULTS PROPS:', props.results)
// the search results

// const nominater = function(movie) {
//   setNominate(oldNominate => [...oldNominate, movie])
//   // is saving to its own state for each movie...
//   // need it to join together
// }

console.log('RESULTS', props.results)

  if (results !== undefined) {
  return results.map((movie, index) => {
    if (movie.Type === "movie") {
      return (
      <Movie key={index} nominater={() => props.nominater(movie)} {...movie} />
      )
    }
  });
} else {
  return <Movie />
}
}