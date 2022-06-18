import React from 'react'

const movie1Card = ({movie1}) => {
  return (
<div className="movie">
        <div>
          {movie1.Year}
        </div>

        <div>
          <img src={ movie1.Poster !== 'N/A' ? movie1.Poster : "https://via.placeholder.com/400"} alt="" />
        </div>

        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>
      </div>  )
}

export default movie1Card