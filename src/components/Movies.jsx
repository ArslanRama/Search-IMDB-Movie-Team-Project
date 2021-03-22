import React, {useContext} from 'react';
import {MyContext}  from '../context/MainContext';
import Header from './Header';

//* here we need the placeholder image which is the poster in API
//* Create a variable with the poster like const ... = "poster link"
//* Create a function with paramater and pass it in return to show the info in browser

const Movies =()=> {
   const [state, dispatch] = useContext(MyContext);
   console.log(state);
    return (
        <div>
       {state.movies.map((movie) =>(
           <Header name={movie.title} key={movie.id} />

       ))}
        </div>
    )
}

export default Movies
