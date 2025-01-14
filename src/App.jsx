import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import MovieList from './components/MovieList'
import SeriesList from './components/TvSeries'

function App() {
  const [query, setQuery] = useState("")

  const handleSearch= (query) =>{
    setQuery(query);
    console.log(query)
  }
  return (
    <>
      <HeaderComponent onSearch={handleSearch}/>
      <h1 className='container'>Film</h1>
      <MovieList query={query} />
      <h1 className='container'>Serie TV</h1>
      <SeriesList query={query}/>
        
      
    </>
  )
}

export default App
