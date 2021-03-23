// import React from 'react'

// const Movies = (props) => {
//     console.log(props.movies);
//     return (
//         <div>
//             <header>
//             {props.movies} 
//             </header>
//         </div>
//     )
// }
// export default Movies;

import React from 'react'



const  Movie = (movie) => {
 

  return (
    <div className="movie">

      <p>{movie.Title}</p>
    </div>
  )
}

export default Movie 