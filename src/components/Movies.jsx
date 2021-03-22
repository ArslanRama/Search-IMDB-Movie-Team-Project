import React from 'react'

const Movies = (props) => {
    console.log(props.movies);
    return (
        <div>
            <header>
            {props.movies} 
            </header>
        </div>
    )
}
export default Movies;
