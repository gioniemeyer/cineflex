import {Link} from 'react-router-dom';

export default function SuccessPage({movieSelected}) {
    return(
        <div className='container'>
            <div className="infos">
                <strong>Pedido feito com sucesso!</strong>
            </div>
            <div className='infos'>
                <strong>Filme e sessão</strong>
                <p>{movieSelected.title}</p>
                <p><span>{movieSelected.session.day.date}</span> <span>{movieSelected.session.name}</span></p>
            </div>
            <div className='infos'>
                <strong>Ingressos</strong>
                {
                    movieSelected.seats.map( (chair) => {
                        return (
                            <p>Assento {chair.name}</p>
                        )
                    } )
                }
            </div>
            <div className='infos'>
                <strong>Comprador</strong>
                <p>Nome: {movieSelected.buyer.name}</p>
                <p>CPF: {movieSelected.buyer.cpf}</p>
            </div>

            <Link to="/">
                <button>
                    Home
                </button>
            </Link>
        </div>
    );
}