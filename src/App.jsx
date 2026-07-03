import { useEffect, useState } from 'react'
import './App.css'
import Movies from './Components/Movies/Movies'
import Navbar from './Navbar/Navbar'
import { use } from 'react';
import Footer from './Components/Footer/Footer';
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
      <Footer></Footer>
    </>
  )
}

export default App
