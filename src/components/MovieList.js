import React from 'react'

const MoviesList = (movies) => {
  const FavouriteComponent = movies.favouriteComponent
  return (
    <>
      {movies.movies.map((movie, idx) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movies"></img>
          <div onClick={() => movie.handleFavoriteClick(movie)}className="overlay d-flex align-items-center justify-content-center ">
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  )
}

export default MoviesList