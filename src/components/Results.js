import React from "react";
import Card from "./Card";
import DangerZone from "./Dangerzone";

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

const Results = async ({ castResults, crewResults, searchResults }) => {

  const data = await getTomCruiseMovies();

  console.log(data);

  const cruiseCastData = data.cast;

  const cruiseCrewData = data.crew;

  const tomCruiseMovieTitles = [
    ...cruiseCastData.map((cruiseResult) => cruiseResult.title),
    ...cruiseCrewData.map((cruiseResult) => cruiseResult.title),
  ];

  const renderSearchResults = () => {
    const matchingMovie = searchResults.find((movie) =>
    tomCruiseMovieTitles.includes(movie.title)
    );

    if (matchingMovie) {
      return <Card key={matchingMovie.id} result={matchingMovie} />;
    } else {
      return (
        <div>
          <DangerZone />
        </div>
      );
    }
  }

  return (
    <div>
      {castResults && castResults.length > 0 && (
        <div className="sm:grid sm:grid-cols-2 lg: grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
          {castResults.map((result) => (
            <Card key={result.id} result={result} />
          ))}
        </div>
      )}

      {crewResults && crewResults.length > 0 && (
        <div className="sm:grid sm:grid-cols-2 lg: grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
          {crewResults.map((result) => (
            <Card key={result.id} result={result} />
          ))}
        </div>
      )}

      {searchResults && searchResults.length > 0 && (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {renderSearchResults()}
        </div>
      )}
    </div>
  );
};

export default Results;
