import React from 'react'
import StarRating from "./starRating"

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
          <div onClick={() => movies.handleFavoriteClick(movie)}className=" d-flex align-items-center justify-content-center ">
          
            <ul className="card_info">
              <li className="overlay"><FavouriteComponent /></li>
              <li>{movie.Title}</li>
              <li>{movie.Year}</li>
              <li><StarRating rating={5}/></li>
            </ul> 
            
             
            
            
          </div>
          
        </div> 
      ))}
    </>
  )
}

export default MoviesList