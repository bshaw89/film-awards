import React from "react";

import Movie from "./Movie";

export default function Results(props) {
  const { results } = props;
  console.log('props', props)
  console.log('results', results)
  if (results !== undefined && results.Type === "movie") {
  return results.map(movie => {
    return <Movie key={movie.imdbID} {...movie} />;
  });
} else {
  return <Movie />
}
}