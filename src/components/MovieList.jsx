import React, {useContext} from 'react';
import {MyContext}  from '../context/MainContext';
import Movies from './Movies';


const MovieList =()=> {
    // const poster = movie.Poster ? Default_Placeholder_Image: movie.Poster

   const [movies, setMovies] = useContext(MyContext);
  console.log(movies)
    return (
        <div>
       {/* {movies.movies.map((movie) =>(
           <Movies text={movie.Title} key={movie.id} />

       ))} */}
       {/* <img 
       width='200'
       alt={`The Movie titled: ${movie.Title}`}
       src={movie.poster}
       /> */}
        </div>
    )
}

export default MovieList;
