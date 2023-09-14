import Image from "next/image";
import React from "react";

import { PiShootingStarFill } from "react-icons/pi";

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  return await res.json();
};

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  // Parse the release date string as a Date object
  let releaseDate = new Date(movie.release_date);

  if (movie.release_date === "") {
    formattedReleaseDate = "Release date unknown.";
  } else {
    // Extract the year, month, and day
    var year = releaseDate.getFullYear();
    var month = String(releaseDate.getMonth() + 1); // Month is 0-based, so we add 1
    var day = String(releaseDate.getDate());

    // Format the date as MM/DD/YYYY
    var formattedReleaseDate = `${month}/${day}/${year}`;
  }

  //Change the vote_average into it's own const.
  const viewerScore = movie.vote_average;

  //Use Math.round on that const, then have that be it's own const. That const will be the new score.
  const roundedViewerScore = Math.round(viewerScore * 10) / 10;

  const convertTime = () => {
  const movieHour = Math.floor(movie.runtime / 60);
  const movieMinutes = movie.runtime % 60;

  let convertedMovieLength;

  if (movieHour > 1) {
    convertedMovieLength = `${movieHour} hours, ${movieMinutes} minutes`;
  } else {
    convertedMovieLength = `${movieHour} hour, ${movieMinutes} minutes`;
  }
  return convertedMovieLength;
}

const helpfulMovieLength = convertTime();

  return (
    <div>
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            width={500}
            height={300}
            alt="No image found!"
            className="rounded-lg"
            style={{ maxWidth: "100%", height: "100%" }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
          />
          <div className="p-2">
            <h1 className="text-3xl mb-2 font-bold dark:text-red-600 text-red-400">
              {movie.title}
            </h1>
            <h2 className="text-xl italic mb-2">{movie.tagline}</h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Length:</span>
              {helpfulMovieLength}
            </p>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Overview:</span>
              {movie.overview}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Release Date:</span>
              {formattedReleaseDate}
            </p>
            <p className="flex items-center">
              <span className="font-semibold pr-1">User Rating</span>
              <span className="text-3xl text-red-400 dark:text-red-400 px-1">
                <PiShootingStarFill />
              </span>
              <span className="text-2xl px-1">
                {roundedViewerScore ? roundedViewerScore : "No rating."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
