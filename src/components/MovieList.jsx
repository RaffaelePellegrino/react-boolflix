import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';

function MovieList({ query }) {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');  

  useEffect(() => {
    if (!query){
        return(
            console.log("scegli il film")
        )
    }; 

    const fetchMovies = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '2f8263db41ede25be58d41a51f59201d',  
            query: query,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        setError('Errore durante il recupero del film');
      }
      setLoading(false);
    };

    fetchMovies();
  }, [query]); 

  function getFlag(linguaggio){
    const flags = {
        en: 'https://flagcdn.com/w320/us.png',  
        it: 'https://flagcdn.com/w320/it.png',  
        fr: 'https://flagcdn.com/w320/fr.png', 
        de: 'https://flagcdn.com/w320/de.png',  
        es: 'https://flagcdn.com/w320/es.png',  
      };
          return flags[linguaggio] || 'https://flagcdn.com/w320/unknown.png';
      
  }

  return (
    <div className='container'>
        {movies.map((movie) => (
          <div key={movie.id} className='card'>
            <div className='cardImage'>
                <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                />
            </div>
            <div className='cardText'>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Valutazione Media: {movie.vote_average/2}</p>
                <div className='flag'>
                    <img src={getFlag(movie.original_language)}/>
                </div>
                <p>{movie.release_date}</p>
            </div>
        </div>
        ))}
    </div>
  );
}

export default MovieList;
