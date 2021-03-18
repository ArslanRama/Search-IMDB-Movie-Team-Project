import React, {useState} from 'react'


const Search=(props)=> {
    const [searchValue, setSearchValue]=useState("");

    // handle function
    const handleSearchInputChanges =(e)=>{
        setSearchValue(e.target.value);
    }
    // search function
    const callSearchFunction = (e)=>{
        e.preventDefault();
        props.search(searchValue)
        // reset button
        
    }

    return (
        <div>
            <form className="search">
            <input 
            type="text"
            value={searchValue}
            onChange={handleSearchInputChanges}
            placeholder="Search..."
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
            </form>

           
        </div>
    )
}
export default  Search
