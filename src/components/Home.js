import axios from 'axios';
import {useState, useEffect } from 'react';
import Movie from './Movie';
import {Link} from 'react-router-dom';


export default function Home() {

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies');
        request.then( (response) => setMoviesList(response.data));
    },[])

    return(
        <div className='container'>
            <h1>Selecione o filme</h1>
            <div className="movies">

                {
                    moviesList.map( (movie,i) => (
                        <Movie movie={movie} />
                     ) )
                }

            </div>
        </div>
    )   
}