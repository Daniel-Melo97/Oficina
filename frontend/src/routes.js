import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Login from './pages/Login';
import TelaAdm from './pages/TelaAdm';
import CrudPessoa from './pages/TelaAdm/SubTelas/CrudPessoa';
import CrudCarros from './pages/TelaAdm/SubTelas/CrudCarros';
import CrudServicos from './pages/TelaAdm/SubTelas/CrudServicos';
import CrudItens from './pages/TelaAdm/SubTelas/CrudItens';




export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={CrudServicos}/>
            </Switch>
        </BrowserRouter>
    )
}