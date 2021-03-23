import React from 'react'

const MovieListHeader = (props) => {
  return (
    <div>
      <div className="col">
        <h1>{props.heading}</h1>
      </div>
    </div>
  )
}
export default MovieListHeader