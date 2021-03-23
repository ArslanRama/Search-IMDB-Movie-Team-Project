import React, { useContext } from 'react'
import { MyContext } from '../context/MainContext'
import Movies from './Movies'

const MovieList = () => {
  // const poster = movie.Poster ? Default_Placeholder_Image: movie.Poster

  const [movies, setMovies] = useContext(MyContext)
  console.log(movies)
  return (
    <div>
      {movies.map((movie) => (
        <Movies movies={movie.Title} key={movie.id} />
      ))}
    </div>
  )
}

export default MovieList
