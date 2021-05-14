import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';

export default function Movie(props) {

    const {movie} = props

    return(
        <Link to={`/sessoes/${movie.id}`} >
        <MovieDiv key={movie.id}>
            <img src={movie.posterURL} />           
        </MovieDiv>
        </Link>
    )
}

const MovieDiv = styled.div`
    width: 129px;
    height: 193px;
    margin: 38px 38px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img {
    height: calc(100% - 16px);
    width: calc(100% - 16px);
    padding: 8px;
}
`