import React from 'react'

const MoviesList = (movies) => {
  const FavouriteComponent = movies.favouriteComponent
  return (
    <>
      {movies.movies.map((movie, idx) => (
        <div className="movie">
          <img 
          width="200"
          src={movie.Poster} 
          alt="movies"
          />
          <div onClick={() => movies.handleFavoriteClick(movie)}className="overlay d-flex align-items-center justify-content-center ">
          <FavouriteComponent />
          </div>
        </div> 
      ))}
    </>
  )
}

export default MoviesList