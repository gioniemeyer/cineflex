import {Link} from 'react-router-dom';

export default function DaysOfSessions({day}) {
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
}