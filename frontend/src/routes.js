import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Login from './pages/Login';
import TelaAdm from './pages/TelaAdm';
import CrudPessoa from './pages/TelaAdm/SubTelas/CrudPessoa';
import CrudCarros from './pages/TelaAdm/SubTelas/CrudCarros';
import CrudServicos from './pages/TelaAdm/SubTelas/CrudServicos';
import CrudItens from './pages/TelaAdm/SubTelas/CrudItens';
import TelaCliente from './pages/TelaCliente';
import TelaDados from './pages/TelaCliente/TelaDados';
import TelaCarros from './pages/TelaCliente/TelaCarros';
import TelaServicos from './pages/TelaCliente/TelaServicos';
 


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={TelaServicos}/>
            </Switch>
        </BrowserRouter>
    )
}