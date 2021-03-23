import React, {useState, useContext} from 'react'
import {MyContext} from "./MovieContext"

const Search=()=> {
     const [dispatch] = useContext(MyContext)
    const [movieName, setMovieName]=useState([]);

    // handle function
    const handleSearchInputChanges =(e)=>{
        setMovieName(e.target.value);
    }

    // reset function
    const resetInputField = () => {
        setMovieName("");
      }
    // search function
    const callSearchFunction = (e)=>{
        e.preventDefault();
        resetInputField()
      dispatch({type:'SEARCH_MOVIE_REQUEST', payload:movieName})
        // reset button
        
    }

    return (
        <div>
            <form className="search">
            <input
            value={movieName} 
            type="text"
            onChange={handleSearchInputChanges}
            placeholder="Search..."
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
            </form>

           
        </div>
    )
}
export default  Search
