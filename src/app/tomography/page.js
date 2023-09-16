import Results from "@/components/Results";
import React from "react";

const API_KEY = process.env.API_KEY;

const getTomCruiseMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/500/movie_credits?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 21600 } }
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch Tom Cruise movies. Just watch a 'Mission: Impossible' movie."
    ); //this will be caught by the error page and passed to the error page as props.
  }

  return res.json();
};

const Tomography = async () => {
  const data = await getTomCruiseMovies();

  console.log(data);

  const castResults = data.cast;

  const crewResults = data.crew;

  return (
    <div>
      <h1 className="text-4xl font-bold m-6 text-red-500">
        What movies has Tom Cruise done, anyway?
      </h1>
      <h2 className="text-xl m-3">
        The Tomography page celebrates the entire cinematic catalogue of Tom
        Cruise! Listed first are the motion picture events that Tom Cruise has
        acted in. After that are the stories that Tom Cruise helped bring to the
        silver screen.
      </h2>
      <h3 className="text-4xl font-bold m-6 text-red-500">
        In Front of the Camera
      </h3>
      <Results castResults={castResults} />
      <h3 className="text-4xl font-bold m-6 text-red-500">Behind the Scenes</h3>
      <Results crewResults={crewResults} />
    </div>
  );
};

export default Tomography;
