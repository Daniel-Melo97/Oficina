import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Login from './pages/Login';
import TelaAdm from './pages/TelaAdm';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}