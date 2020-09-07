import React from "react";
import Button from "./Button"

import classnames from "classnames";

export default function Movie(props) {
  const movieInfoClass = classnames("movie__info", {
  });

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