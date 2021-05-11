import {Link} from 'react-router-dom';

export default function MovieSessions() {
    return(
        <div className='container'>
            <h1>Selecione o horário</h1>
            <div className='dayOfSession'>
                <p>Quinta-feira - 24/06/2021</p>
                <div className='sessions'>
                    <Link to="/sessao/IdSession">
                        <div className='timeOfSession'>
                            <p>15:00</p>
                        </div>
                    </Link>
                    <Link to="/sessao/IdSession">
                        <div className='timeOfSession'>
                            <p>15:00</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='dayOfSession'>
                <p>Quinta-feira - 24/06/2021</p>
                <div className='sessions'>
                    <Link to="/sessao/IdSession">
                        <div className='timeOfSession'>
                            <p>15:00</p>
                        </div>
                    </Link>
                    <Link to="/sessao/IdSession">
                        <div className='timeOfSession'>
                            <p>15:00</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}