import React from 'react'

function Movie({singleMovie}) {
    
  return (
     <div className="max-w-xs overflow-hidden rounded-xl bg-gray-900 text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img 
        src={singleMovie.poster}
        alt={singleMovie.title}
        className=" w-70 h-50 object-cover"
      />

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-bold">{singleMovie.title}</h2>
          <span className="rounded bg-yellow-500 px-2 py-1 text-sm font-semibold text-black">
            ⭐ {singleMovie.rating}
          </span>
        </div>

        <div className="mb-3 flex gap-2 text-sm text-gray-400">
          <span>{singleMovie.year}</span>
          <span>•</span>
          <span>{singleMovie.genre}</span>
          <span>•</span>
          <span>{singleMovie.duration}</span>
        </div>

        <p className="mb-4 text-sm text-gray-300">
          {singleMovie.description}
        </p>

        <button className="w-full rounded-lg bg-red-600 py-2 font-semibold transition hover:bg-red-700">
          View Details
        </button>
      </div>
    </div>
  )
}

export default Movie
