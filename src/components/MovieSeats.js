import {Link, useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Legends from './Legends';
import Form from './Form';
import Footer from './Footer';

export default function MovieSeats({movieSelected, setMovieSelected}) {

    let history = useHistory();
    const {idSessao} = useParams();
    const [buyer, setBuyer] = useState("");
    const [cpf, setCpf] = useState('');
    const [movieSeats, setMovieSeats] = useState([]);

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        request.then(resp => {
            const arrSeats = resp.data.seats;
            arrSeats.map ( (x) => {
                x.isChosen = false;
            } )
            setMovieSeats(arrSeats);
            movieSelected.session = resp.data
            setMovieSelected(movieSelected)
        })
    } ,[]);

    function toggleSelection(seat) {
        const newMovieSeats = movieSeats.map((item) => {
            if(seat.id === item.id) {
                if(item.isAvailable) {
                    item.isChosen = !item.isChosen;
                } else {
                    alert("Esse assento não está disponível!")
                }
            }
            return item;
        })
        setMovieSeats(newMovieSeats);

        const array = newMovieSeats.filter(chair => {
            return chair.isChosen;
        })
        const arrayIds = array.map(chair => chair.id);
        movieSelected.seats = array;
        movieSelected.chairIds = arrayIds;
        setMovieSelected(movieSelected);
    }


    function finishOrder() {
        const infos = {
            ids: movieSelected.chairIds,
            name: buyer,
            cpf: cpf           
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many',infos);
        promise.then((resp) => {
            movieSelected.buyer = {name: buyer, cpf: cpf};
            setMovieSelected(movieSelected);
            history.push('/sucesso')
        });
    }
   
    return(
        <div className='container'>
            <h1>Selecione o assento</h1>
            <div className='container-seats'>
                {
                    movieSeats.map( seat => {
                        return(
                            <div className={!seat.isAvailable ? 'seat taken' : seat.isChosen ? 'seat chosen' : 'seat'} onClick={() => toggleSelection(seat)}>
                                <p>{seat.name}</p>
                            </div> 
                        )
                    } )
                }
            </div>
            <Legends />
            <Form buyer={buyer} setBuyer={setBuyer} cpf={cpf} setCpf={setCpf} />
            <Link to={history}>
                <button onClick={finishOrder}>
                    Reservar assento(s)
                </button>
            </Link>
            <Footer movieSelected={movieSelected} />
        </div>
    )
}