import React from "react";
import Card from "./Card";

const Results = ({ castResults, crewResults, searchResults }) => {

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
      <div className="sm:grid sm:grid-cols-2 lg: grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {searchResults.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    )}
    </div>
  )
}

export default Results;
