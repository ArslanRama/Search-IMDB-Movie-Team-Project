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
            <div className=" d-flex align-items-center justify-content-center " onClick={() => movies.handleFavoriteClick(movie)}>
            
            <div className="card_info">
              <p className="overlay"><FavouriteComponent /></p>
              <h7>{movie.Title}</h7>
              <p>{movie.Year}</p>
              <p><StarRating rating={4.5}/></p>
            </div> 
              
               
              
              
            </div>
            
          </div> 
        ))}
      </>
    )
}

export default FavouriteList
