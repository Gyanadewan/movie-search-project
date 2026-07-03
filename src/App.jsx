import { useEffect, useState } from 'react'
import './App.css'
import Movies from './Components/Movies/Movies'
import Navbar from './Navbar/Navbar'
import { use } from 'react';
function App() {
  const [movies,setMovies] = useState([]);
   useEffect (() =>{
        fetch("moviesData.json")
        .then(res => res.json())
        .then(data => setMovies(data))
   },[])
  return (
    <>
      <Navbar></Navbar>
      <Movies movies={movies}></Movies>
    </>
  )
}

export default App
