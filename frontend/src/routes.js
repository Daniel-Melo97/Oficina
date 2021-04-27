import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Login from './pages/Login';
import TelaAdm from './pages/TelaAdm';
import CrudPessoa from './pages/CrudPessoa';




export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={CrudPessoa}/>
            </Switch>
        </BrowserRouter>
    )
}