import {Link} from 'react-router-dom';

export default function SuccessPage({movieSelected, movieSession}) {
    return(
        <div className='container'>
            <div className="infos">
                <strong>Pedido feito com sucesso!</strong>
            </div>
            <div className='infos'>
                <strong>Filme e sessão</strong>
                <p>{movieSelected.title}</p>
                <p><span>{movieSession.day.date}</span> <span>{movieSession.name}</span></p>
            </div>
            <div className='infos'>
                <strong>Ingressos</strong>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div className='infos'>
                <strong>Comprador</strong>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>

            <Link to="/">
                <button>
                    Home
                </button>
            </Link>
        </div>
    );
}