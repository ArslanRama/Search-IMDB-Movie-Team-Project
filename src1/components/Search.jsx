import React, {useState, useContext} from 'react'
import MyContext from "../context/MainContext"

const Search=()=> {
     const [dispatch] = useContext(MyContext)
    const [movieName, setMovieName]=useState([]);

    // handle function
    const handleSearchInputChanges =(e)=>{
        setMovieName(e.target.value);
    }
    // search function
    const callSearchFunction = (e)=>{
        e.preventDefault();
      dispatch({type:'SEARCH_MOVIE_SUCCESS', payload:movieName})
        // reset button
        
    }

    return (
        <div>
            <form className="search">
            <input 
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
