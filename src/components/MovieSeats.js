import {Link, useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Legends from './Legends';
import Form from './Form';
import Footer from './Footer';
import styled from 'styled-components';
import Seat from './Seat';

export default function MovieSeats({movieSelected, setMovieSelected}) {

    let history = useHistory();
    const {idSessao} = useParams();
    const [buyer, setBuyer] = useState("");
    const [cpf, setCpf] = useState('');
    const [movieSeats, setMovieSeats] = useState([]);

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        request.then( (resp) => {
            const arrSeats = resp.data.seats;
            setMovieSeats(arrSeats);
            movieSelected.session = resp.data
            setMovieSelected(movieSelected)
        }  )} ,[]);

    function toggleSelection(seat) {
        const newMovieSeats = movieSeats.map((item) => {
            if(seat.id === item.id) {
                (item.isAvailable) ? item.isChosen = !item.isChosen : alert("Esse assento não está disponível!")                   
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
                    movieSeats.map( seat => <Seat seat={seat} toggleSelection={toggleSelection} /> )
                }
            </div>
            <Legends />
            <Form buyer={buyer} setBuyer={setBuyer} cpf={cpf} setCpf={setCpf} />
            <Link to={history}>
                <Button onClick={finishOrder}>
                    Reservar assento(s)
                </Button>
            </Link>
            <Footer movieSelected={movieSelected} />
        </div>
    )
}

const Button = styled.button`
    background-color: #E8833A;
    color: #fff;
    font-size: 18px;
    width: 150px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-right: 20px;
`