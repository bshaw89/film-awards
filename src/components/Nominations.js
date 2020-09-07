import React from "react";

import Movie from "./Movie";
import Nominated from "./Nominated";

export default function Nominations(props) {
  // const [nominate, setNominate] = useState([]);
  console.log("PROPS.NOMINATE.LENGTH", props.nominate.length)
  const results = props.nominate;
  // props passed from LiveSearch

  // const nominater = function(movie) {
  //   setNominate(oldNominate => [...oldNominate, movie])
  //   // is saving to its own state for each movie...
  //   // need it to join together
  // }

  if (results.length > 0 && results !== undefined) {
  return results.map((movie, index) => {
      return <Nominated key={index} nominate={props.nominate} denominator={() => props.denominator(movie)} {...movie} />;
  });
} else {
  return <Nominated nominate={props.nominate} />
}
}