import {Link} from 'react-router-dom';

export default function Showtime({showtime}) {
    return(
        <Link to={`/assentos/${showtime.id}`}>
            <div className='timeOfSession'>
                <p>{showtime.name}</p>
            </div>
        </Link>
    )
}