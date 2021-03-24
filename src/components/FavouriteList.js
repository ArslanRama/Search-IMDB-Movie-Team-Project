import React from 'react'
import StarRating from "./starRating"

function FavouriteList(movies) {
    const FavouriteComponent = movies.favouriteComponent
    return (
      <>
        {movies.movies.map((movie, idx) => (
          <div className="favourite_list">
            <img 
            width="200"
            src={movie.Poster} 
            alt="movies"
            />
            <div className="overlay d-flex align-items-center justify-content-center " onClick={() => movies.handleFavoriteClick(movie)}>
            
              <ul className="card_info">
                <li><FavouriteComponent /></li>
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

export default FavouriteList
