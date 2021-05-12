import {Link, useParams} from 'react-router-dom';

export default function Movie(props) {

    const {movie} = props

    return(
        <Link to={`/sessoes/${movie.id}`} >
        <div key={movie.id} className="movie">
            <img src={movie.posterURL} />           
        </div>
        </Link>
    )
}