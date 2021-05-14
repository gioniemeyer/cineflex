import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function SuccessPage({movieSelected}) {
    return(
        <div className='container'>
            <Infos>
                <strong>Pedido feito com sucesso!</strong>
            </Infos>
            <Infos>
                <strong>Filme e sessão</strong>
                {movieSelected.title}
                <span>{movieSelected.session.day.date}</span> <span>{movieSelected.session.name}</span>
            </Infos>
            <Infos>
                <strong>Ingressos</strong>
                {
                    movieSelected.seats.map( (chair) => {
                        return (
                            <p>Assento {chair.name}</p>
                        )
                    } )
                }
            </Infos>
            <Infos>
                <strong>Comprador</strong>
                <p>Nome: {movieSelected.buyer.name}</p>
                <p>CPF: {movieSelected.buyer.cpf}</p>
            </Infos>

            <Link to="/">
                <Button> Home </Button>
            </Link>
        </div>
    );
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

const Infos = styled.div`
    font-size: 22px;
    margin-bottom: 20px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    word-wrap: normal;
    text-align: center;
`