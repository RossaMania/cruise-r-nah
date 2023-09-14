import React from 'react'

import { PiShootingStarFill } from "react-icons/pi";

const Card = ({result}) => {

  // Parse the release date string as a Date object
  let releaseDate = new Date(result.release_date);

  if (result.release_date === "") {
    formattedReleaseDate = "Release date unknown.";
  } else {

  // Extract the year, month, and day
  var year = releaseDate.getFullYear();
  var month = String(releaseDate.getMonth() + 1); // Month is 0-based, so we add 1
  var day = String(releaseDate.getDate());

  // Format the date as MM/DD/YYYY
  var formattedReleaseDate = `${month}/${day}/${year}`;
  }


  const viewerScore = result.vote_average;

  const roundedViewerScore = Math.round(viewerScore * 10) / 10;



  return (
    <div>
      <h2>{result.title}</h2>
      <p>as {result.character || result.job}</p>
      <p>
        {roundedViewerScore ? roundedViewerScore : "No rating."}
        <PiShootingStarFill />
        {formattedReleaseDate}
      </p>
    </div>
  );
}

export default Card

