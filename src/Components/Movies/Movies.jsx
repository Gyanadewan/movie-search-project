import React from 'react'
import Movie from './Movie/Movie'

function Movies({movies}) {
  return (
   <div className='px-4 border border-amber-600 m-3'>
       <h3 className='  flex justify-center m-8 font-bold text-5xl   '>All Movies</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6  '>
       {
        movies.map(singleMovie => <Movie singleMovie={singleMovie}></Movie> )
       }
    </div>
   </div>
  )
}

export default Movies
