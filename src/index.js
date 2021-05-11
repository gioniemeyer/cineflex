import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import MovieSessions from './components/MovieSessions';
import MovieSeats from './components/MovieSeats';
import SuccessPage from './components/SuccessPage';

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
            
            <Route path="/filme/id" exact>
                <MovieSessions />
            </Route>

            <Route path="/" exact>
                <MovieSeats />
            </Route>

            <Route path="/" exact>
                <SuccessPage />
            </Route>
        </Switch>

        <Footer />
    </BrowserRouter>
);
}

ReactDom.render(<App />, document.querySelector('.root'));
