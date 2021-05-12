import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import MovieSessions from './components/MovieSessions';
import MovieSeats from './components/MovieSeats';
import SuccessPage from './components/SuccessPage';
import Footer from './components/Footer';

import './styles/reset.css';
import './styles/style.css';

function App() {
return(
    <BrowserRouter>    
        <Header />

        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            
            <Route path="/sessoes/:idFilme" exact>
                <MovieSessions />
                <Footer />
            </Route>

            <Route path="/assentos/:idSessao" exact>
                <MovieSeats />
                <Footer />
            </Route>

            <Route path="/sucesso" exact>
                <SuccessPage />
            </Route>
        </Switch>

    </BrowserRouter>
);
}

ReactDom.render(<App />, document.querySelector('.root'));
