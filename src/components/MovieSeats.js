import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Legends from './Legends';

export default function MovieSeats() {

    const {idSessao} = useParams();
    const [movieSeats, setMovieSeats] = useState([]);
    const [buyer, setBuyer] = useState("");
    const [cpf, setCpf] = useState('');
    const [infos, setInfos] = useState({});

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
            if(newMovieSeats[i].isChosen === true) {
                array.push(newMovieSeats[i].name);
            }
        }
        infos.ids = array;
        setInfos(infos)
    }

    function finishOrder() {
        infos.name = buyer;
        infos.cpf = cpf;
        setInfos(infos);
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', infos);
        request.then(alert)
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
            <form>
                <p>Nome do comprador:</p>
                <input value={buyer} onChange={e => setBuyer(e.target.value)} placeholder="Digite seu nome..."/>
                <p>CPF do comprador:</p>
                <input set={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
            </form>
            <Link to="/sucesso">
                <button onClick={finishOrder}>
                    Reservar assento(s)
                </button>
            </Link>
        </div>
    )
}