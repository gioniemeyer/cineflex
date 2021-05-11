import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from 'Header';
import Home from 'Home';
import Footer from 'Footer';
import MovieSeats from 'MovieSeats';
import MovieSessions from 'MovieSessions';
import SuccessPage from 'SuccessPage';


function App() {
return(
    <h1>testando</h1>
);
}

ReactDom.render(<App />, document.querySelector('.root'));
