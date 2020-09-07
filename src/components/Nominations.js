import React from "react";

import Nominated from "./Nominated";

export default function Nominations(props) {
  const results = props.nominate;

  if (results.length > 0 && results !== undefined) {
    return results.map((movie, index) => {
      return <Nominated 
        key={index} 
        nominate={props.nominate}
        denominator={() => props.denominator(movie)}
        {...movie}
      />;
    });
  } else {
    return <Nominated nominate={props.nominate} />
  }
}