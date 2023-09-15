import Results from '@/components/Results';
import React from 'react'

const SearchPage = async ({ params }) => {

  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data!");
  }

  const data = await res.json();

  const searchResults = data.results;
  return (
    <div>
      {searchResults && searchResults.length === 0 && (
        <h1>Oh no! No results found!</h1>
      )}
      {searchResults && <Results results={searchResults} />}
    </div>
  )
}

export default SearchPage;