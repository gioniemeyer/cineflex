import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MovieSeats() {

    const {idSessao} = useParams();
    const [movieSeats, setMovieSeats] = useState([]);
    console.log(idSessao)

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
    }

    console.log(movieSeats);
    
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
            <div className="legend">
                <div className="legend-topic">
                <div className='seat chosen'></div>
                    <p>Selecionado</p>
                </div>
                <div className="legend-topic">
                    <div className='seat'></div>
                    <p>Disponível</p>
                </div>
                <div className="legend-topic">
                    <div className='seat taken'></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <form>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."/>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."/>
            </form>
            <Link to="/sucesso">
                <button>
                    Reservar assento(s)
                </button>
            </Link>
        </div>
    )
}