import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PiShootingStarFill } from "react-icons/pi";

const Card = ({ result }) => {
  // Parse the release date string as a Date object
  let releaseDate = new Date(result.release_date);

  if (result.release_date === "") {
    formattedReleaseDate = "Release date unknown.";
  } else {
    // Extract the year, month, and day
    var releaseYear = releaseDate.getFullYear();
    var releaseMonth = String(releaseDate.getMonth() + 1); // Month is 0-based, so we add 1
    var releaseDay = String(releaseDate.getDate());

    // Format the date as MM/DD/YYYY
    var formattedReleaseDate = `${releaseMonth}/${releaseDay}/${releaseYear}`;
  }

  const viewerScore = result.vote_average;

  const roundedViewerScore = Math.round(viewerScore * 10) / 10;

  return (
    <div className="cursor-pointer sm:p-2 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-1 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
          width={342}
          height={542}
          alt="No poster found!"
          className="group-hover:opacity-80 transition-opacity duration-200"
          style={{ maxWidth: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <h2 className="mb-1 font-bold dark:text-red-500 text-red-400">
          {result.title}
        </h2>
        <h2>({releaseYear ? releaseYear : "????"})</h2>
        <p className="italic mb-1">as {result.character || result.job}</p>
        <p className="flex items-center mb-1">
          <span className="text-3xl text-red-400 dark:text-red-400 px-1">
            <PiShootingStarFill />
          </span>
          <span className="text-xl px-1">
            {roundedViewerScore ? roundedViewerScore : "No user rating."}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Card;
