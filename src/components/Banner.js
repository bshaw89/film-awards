import React, { useState, useEffect, useCallback } from "react";

import useDebounce from "../hooks/useDebounce";

export default function Banner(props) {

  return (
    <section className="banner">
      <div>Nominations are in!</div>
    </section>
  );
}
