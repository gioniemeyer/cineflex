import {useState} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import MovieSessions from './components/MovieSessions';
import MovieSeats from './components/MovieSeats';
import SuccessPage from './components/SuccessPage';

import './styles/reset.css';
import './styles/style.css';

function App() {

    const[movieSelected, setMovieSelected] = useState({});
    const [movieSession, setMovieSession] = useState([]);

return(
    <BrowserRouter>    
        <Header />

        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            
            <Route path="/sessoes/:idFilme" exact>
                <MovieSessions movieSelected={movieSelected} setMovieSelected={setMovieSelected} />
            </Route>

            <Route path="/assentos/:idSessao" exact>
                <MovieSeats movieSession={movieSession} setMovieSession={setMovieSession} movieSelected={movieSelected} setMovieSelected={setMovieSelected} />
            </Route>

            <Route path="/sucesso" exact>
                <SuccessPage movieSession={movieSession} movieSelected={movieSelected} />
            </Route>
        </Switch>

    </BrowserRouter>
);
}

ReactDom.render(<App />, document.querySelector('.root'));
