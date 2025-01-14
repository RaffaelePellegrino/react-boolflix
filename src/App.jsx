import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import MovieList from './components/MovieList'

function App() {
  const [query, setQuery] = useState("")

  const handleSearch= (query) =>{
    setQuery(query);
    console.log(query)
  }
  return (
    <>
      <HeaderComponent onSearch={handleSearch}/>
      <MovieList query={query} />
        
      
    </>
  )
}

export default App
