import React from 'react'

import { PiShootingStarFill } from "react-icons/pi";

const Card = ({result}) => {

  return (
    <div>
      <h2>{result.title}</h2>
      <p>
        {result.vote_average} <PiShootingStarFill />
        {result.release_date}
      </p>
    </div>
  );
}

export default Card

