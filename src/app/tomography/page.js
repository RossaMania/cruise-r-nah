"use client";

{/* Here is the url to pull up Tom Cruise movie credits:
      'https://api.themoviedb.org/3/person/500/movie_credits?language=en-US'; */}

import React, { useEffect, useState } from "react";

const API_KEY = process.env.API_KEY;

const Tomography = () => {
  const [characterMovies, setCharacterMovies] = useState([]);
  const [selfMovies, setSelfMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

        const results = data.cast;

        if (results) {
          // Separate movies into movies with Tom Cruise playing a character, and movies with Tom Cruise appearing as himself.
          const characterMovies = results.filter(
            (movie) =>
              movie.character !== "Self" &&
              movie.character !== "Self (archive footage)"
          );
          const selfMovies = results.filter(
            (movie) =>
              movie.character === "Self" ||
              movie.character === "Self (archive footage)"
          );

          setCharacterMovies(characterMovies);
          setSelfMovies(selfMovies);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>This is the Tomography page.</h2>
      <p>This page is going to be a data fetch from The Movie Database.</p>
      <p>
        The data will be all about Tom Cruise, and will be a good way to test
        data fetching.
      </p>
      <h3>Acting</h3>
      <ul>
        {characterMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <h3>As Self</h3>
      <ul>
        {selfMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tomography;
