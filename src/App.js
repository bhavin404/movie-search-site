import { useEffect, useState } from 'react';
import searchIcon from './search.svg'
import './App.css';
import MovieCard from './MovieCard';


const API_URL ="https://www.omdbapi.com/?apikey=245d669"

// const movies  = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }
const App = () =>{

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [ lightMode,setLightMode] = useState("dark-theme")



  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  

  useEffect(()=>{
    document.body.className = lightMode
    searchMovies("Spiderman")
  },[lightMode])


  const onEnter = (e)=>{
    if(e.key ==="Enter"){
      searchMovies(searchTerm)
    }
  }
  return (
    <div className="app">
     <h1 > My Movie</h1>

     <div className="search">
      <input 
      type="text"
      placeholder='Search...'
      value={searchTerm}
      onKeyPress = {onEnter}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img 
      src={searchIcon} 
      alt="" 
      onClick={() => searchMovies(searchTerm)}
      />
     </div>

     {
      movies?.length>0 ? 
      (
      <div className="container">
         {movies.map((movie1,index)=>(
          <MovieCard
          key ={index}
          movie1={movie1} />
         ))}     
      </div>
            )
                  :
      <>
        <h2>No Movies Found</h2>
      </>
     }

    

    </div>
  );
}

export default App;
