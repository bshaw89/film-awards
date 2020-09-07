import React from "react";

import Movie from "./Movie";

export default function Results(props) {
  const results = props.results;

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