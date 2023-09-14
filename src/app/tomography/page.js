import Results from "@/components/Results";
import React from "react";

const API_KEY = process.env.API_KEY;

const Tomography = async () => {

  const res = await fetch(
    `https://api.themoviedb.org/3/person/500/movie_credits?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 21600 } }
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch that Tom Cruise Tomography. Just watch a 'Mission: Impossible' movie."
    ); //this will be caught by the error page and passed to the error page as props.
  }

  const data = await res.json();
  console.log(data);

  const castResults = data.cast;

  const crewResults = data.crew;

  return (
    <div>
      <h2>This is the Tomography page.</h2>
      <p>This page is going to be a data fetch from The Movie Database.</p>
      <p>
        The data will be all about Tom Cruise, and will be a good way to test
        data fetching.
      </p>
      <h3>In Front of the Camera</h3>
      <Results results={castResults}/>
      <h3>Behind the Scenes</h3>
      <Results results={crewResults}/>

    </div>
  );
};

export default Tomography;
