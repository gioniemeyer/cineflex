import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import MovieSeats from './components/MovieSeats';
import MovieSessions from './components/MovieSessions';
import SuccessPage from './components/SuccessPage';

import './styles/reset.css';
import './styles/style.css';

function App() {
return(
    <BrowserRouter>    
        <Header />
        <Home />

        <Switch>
            <Route path="" exact>
                <Home />
            </Route>

        </Switch>

        <Footer />
    </BrowserRouter>
);
}

ReactDom.render(<App />, document.querySelector('.root'));
