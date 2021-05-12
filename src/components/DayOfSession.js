import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function DayOfSession({day}) {

    const showtimes = day.showtimes;

    return(
        <div className='dayOfSession'>
            <p>{day.weekday} - {day.date}</p>
            <div className='sessions'>

                {
                    showtimes.map( showtime => {
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
    
}