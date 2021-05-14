import {Link, useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Legends from './Legends';
import Form from './Form';
import Footer from './Footer';

export default function MovieSeats({movieSelected, setMovieSelected}) {

    let history = useHistory();
    const {idSessao} = useParams();
    const [movieSeats, setMovieSeats] = useState([]);
    const [buyer, setBuyer] = useState("");
    const [cpf, setCpf] = useState('');
    const [chosenSeats, setChosenSeats] = useState([]);

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        request.then(resp => {
            const arrSeats = resp.data.seats;
            arrSeats.map ( (x) => {
                x.isChosen = false;
            } )
            setMovieSeats(arrSeats);
        })
    } ,[]);

    function toggleSelection(seat) {
        const array = [];
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
        for(let i = 0; i < newMovieSeats.length; i++) {
            if(newMovieSeats[i].isChosen) {
                array.push(parseInt(newMovieSeats[i].id)); //ver, preciso mudar pra filter
            }
        }
        setChosenSeats(array);
    }

    function finishOrder() {
        const infos = {
            ids: chosenSeats,
            name: buyer,
            cpf: cpf           
        }
        console.log(infos);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many',infos);
        promise.then((resp) => {
            history.push('/sucesso')
            console.log(resp)});
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