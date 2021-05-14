import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import DaysOfSessions from './DaysOfSessions';

export default function MovieSessions({movieSelected, setMovieSelected}) {
    const { idFilme } = useParams();
    const[sessionDays, setSessionDays] = useState([]);

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        request.then( movie => {
            setSessionDays(movie.data.days);
            setMovieSelected(movie.data);
        } );
    } ,[] );

    console.log(movieSelected);

    return(
        <div className='container'>
            <h1>Selecione o horário</h1>
                {
                    sessionDays.map( day => {
                        return(
                            <DaysOfSessions day={day} sessionDays={sessionDays} setSessionDays={setSessionDays} />
                        )
                    } )
                }
            <Footer movieSelected={movieSelected} />
        </div>
    )
}
