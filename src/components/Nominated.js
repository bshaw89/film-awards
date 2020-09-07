import React from "react";
import Button from "./Button"

import classnames from "classnames";

export default function Nominated(props) {
  const nomInfoClass = classnames("nom__info", {
  });

  return (
    <article className="nom">
      {props.Poster && <img className="movie__thumbnail" src={props.Poster} alt="Movie" />}
      <div className={nomInfoClass}>
        <div className="movie__name">{props.Title}</div>
        <div className="movie__year">{props.Year}</div>
        {props.nominate.length > 0 && <Button onClick={props.denominator}>Remove</Button>}
      </div>
    </article>
  );
}