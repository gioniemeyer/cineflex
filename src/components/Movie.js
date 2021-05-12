import {Link, useParams} from 'react-router-dom';

export default function Movie(props) {

    const {movie} = props
    // const params = useParams();
    // console.log(params)
    return(
        <Link to="/sessoes/idFilme" >
        <div key={movie.id} className="movie">
            <img src={movie.posterURL} />           
        </div>
        </Link>
    )
}