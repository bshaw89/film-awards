import React, { useState, useCallback } from "react";
import Button from "./Button"

import classnames from "classnames";

export default function Movie(props) {
  // const [nominate, setNominate] = useState([]);
  const movieInfoClass = classnames("movie__info", {
    // "movie__info--explicit": props.collectionExplicitness === "explicit"
  });

  // the individual movies

  const { results } = props
  console.log('MOVIE PROPS', props);
  
  // const nominater = function() {
  //   return setNominate(oldNominate => [...oldNominate, props])
  //   // is saving to its own state for each movie...
  //   // need it to join together
  // }


  // need function to move props into nominations component
  // function to store into object?

  return (
    <article className="movie">
      {props.Poster && <img className="movie__thumbnail" src={props.Poster} alt="Movie" />}
      <div className={movieInfoClass}>
        <div className="movie__name">{props.Title}</div>
        <div className="movie__year">{props.Year}</div>
        {props.Title && <Button onClick={props.nominater}>Nominate</Button>}
      </div>
    </article>
  );
}