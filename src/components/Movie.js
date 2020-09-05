import React from "react";

import classnames from "classnames";

export default function Movie(props) {
  const movieInfoClass = classnames("movie__info", {
    // "movie__info--explicit": props.collectionExplicitness === "explicit"
  });

  return (
    <article className="movie">
      {props.Poster && <img className="movie__thumbnail" src={props.Poster} alt="Movie" />}
      <div className={movieInfoClass}>
        <div className="movie__name">{props.Title}</div>
        <div className="movie__year">{props.Year}</div>
      </div>
    </article>
  );
}
