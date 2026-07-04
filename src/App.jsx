import { useEffect, useState } from 'react'
import './App.css'
import Movies from './Components/Movies/Movies'
import Navbar from './Navbar/Navbar'
import Footer from './Components/Footer/Footer';
function App() {
  const [movies,setMovies] = useState([]);
  const [search,setSearch] = useState("");
   useEffect (() =>{
        fetch("moviesData.json")
        .then(res => res.json())
        .then(data => setMovies(data))
   },[])
   const filterMovies = movies.filter(movie=>
     movie.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  return (
    <>
      <Navbar   search={search}
         setSearch={setSearch}></Navbar>
      <Movies movies={filterMovies} ></Movies>
      <Footer></Footer>
    </>
  )
}

export default App
