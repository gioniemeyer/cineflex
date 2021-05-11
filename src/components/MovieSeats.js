import {Link} from 'react-router-dom';

export default function MovieSeats() {
    return(
        <div className='container'>
            <h1>Selecione o assento</h1>
            <div className='container-seats'>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
                <div className='seat'>
                    <p>01</p>
                </div>
            </div>
            <div className="legend">
                <div className="legend-topic">
                <div className='seat'></div>
                    <p>Selecionado</p>
                </div>
                <div className="legend-topic">
                    <div className='seat'></div>
                    <p>Disponível</p>
                </div>
                <div className="legend-topic">
                    <div className='seat'></div>
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