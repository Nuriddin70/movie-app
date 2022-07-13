import React from 'react' 
import Movie from './Movie'

export default function Movies(props) {
  const {movies} = props 
  return (
    <div className='movies'>
      {movies.map(movie => (
        <Movie key ={movie.imbID} {...movie} />
      ))}
    </div>
  )
}
