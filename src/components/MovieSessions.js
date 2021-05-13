import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function MovieSessions() {
    const { idFilme } = useParams();
    const[sessionDays, setSessionDays] = useState([]);

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        request.then( movie => setSessionDays(movie.data.days) );
    } ,[] );

    return(
        <div className='container'>
            <h1>Selecione o horário</h1>
                {
                    sessionDays.map( day => {
                        return(
                            <div className='dayOfSession'>
                                <p>{day.weekday} - {day.date}</p>
                                <div className='sessions'>
                                    {
                                        day.showtimes.map( showtime => {
                                            return(
                                                <Link to={`/assentos/${showtime.id}`}>
                                                    <div className='timeOfSession'>
                                                        <p>{showtime.name}</p>
                                                    </div>
                                                </Link>
                                            )
                                        } )
                                    }
                                </div>
                            </div>                
                        )
                    } )
                }
        </div>
    )
}
