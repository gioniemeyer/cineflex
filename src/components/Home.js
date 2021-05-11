import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    return(
        <div className='container'>
            <h1>Selecione o filme</h1>
            <div className="movies">
                <Link to="/filme/id" >
                <div className="movie">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" />           
                </div>
                </Link>
                <Link to="/filme/id" >
                <div className="movie">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" />           
                </div>
                </Link>
                <Link to="/filme/id" >
                <div className="movie">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" />           
                </div>
                </Link>
                <Link to="/filme/id" >
                <div className="movie">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" />           
                </div>
                </Link>
                <Link to="/filme/id" >
                <div className="movie">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" />           
                </div>
                </Link>
                <Link to="/filme/id" >
                <div className="movie">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" />           
                </div>
                </Link>
                <Link to="/filme/id" >
                <div className="movie">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" />           
                </div>
                </Link>
            </div>
        </div>
    )   
}