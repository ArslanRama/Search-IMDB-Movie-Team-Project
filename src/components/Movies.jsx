import React, {useContext} from 'react';
import {MyContext}  from '../context/MainContext';
import Header from './Header';

//* here we need the placeholder image which is the poster in API
//* Create a variable with the poster like const ... = "poster link"
//* Create a function with paramater and pass it in return to show the info in browser

// const Default_Placeholder_Image = 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'

const Movies =(movie)=> {
    // const poster = movie.Poster ? Default_Placeholder_Image: movie.Poster

   const [state, dispatch] = useContext(MyContext);
   console.log(state);
    return (
        <div>
       {state.movies.map((movie) =>(
           <Header name={movie.Title} key={movie.id} />

       ))}
       <img 
       width='200'
       alt={`The Movie titled: ${movie.Title}`}
       src={movie.poster}
       />
        </div>
    )
}

export default Movies
