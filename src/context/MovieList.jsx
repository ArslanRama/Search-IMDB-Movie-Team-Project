import React, { useContext, useReducer } from 'react'
import { MyContext } from './MovieContext'
import Movie from '../components/Movie'
import Search from './Search'

const MovieList = () => {
  const [state, dispatch] = useReducer("")
  const search = () => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    /* Fetching the data */
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d1ce076e")
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: data.Error
          });
        }
      });
  };
 
  const [movies, errorMessage, isLoading] = useContext(MyContext)
  console.log(movies)
  return (
    <div>
    <h1> Search IMDB MOVIES with HOOK</h1>
    <div>
      <Search search={search} />
    </div>
    <div>
      {isLoading && !errorMessage ? (
        <span className="loader"></span>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))
      )}
    </div>
  </div>
  )
}

export default MovieList
