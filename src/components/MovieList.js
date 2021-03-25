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
          
            <div className="card_info">
              <h6 className="overlay"><FavouriteComponent /></h6>
              <h5>{movie.Title}</h5>
              <p>{movie.Year}</p>
              <p><StarRating rating={3}/></p>
            </div> 
            
             
            
            
          </div>
          
        </div> 
      ))}
    </>
  )
}

export default MoviesList