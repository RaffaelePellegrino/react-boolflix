import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';

function SeriesList({ query }) {
  const [series, setSeries] = useState([]); 
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');  

  useEffect(() => {
    if (!query){
        return(
            console.log("scegli il film")
        )
    }; 

    const fetchSeries = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: '2f8263db41ede25be58d41a51f59201d',  
            query: query,
          },
        });
        setSeries(response.data.results);
      } catch (error) {
        setError('Errore durante il recupero del film');
      }
      setLoading(false);
    };

    fetchSeries();
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
        {series.map((serie) => (
          <div key={serie.id} className='card'>
            <div className='cardImage'>
                <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.title}
                />
            </div>
            <div className='cardText'>
                <h3>{serie.title}</h3>
                <p>{serie.overview}</p>
                <p>Valutazione Media: {serie.vote_average/2}</p>
                <div className='flag'>
                    <img src={getFlag(serie.original_language)}/>
                </div>
                <p>{serie.release_date}</p>
            </div>
        </div>
        ))}
    </div>
  );
}

export default SeriesList;
