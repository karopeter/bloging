import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/header.component';
import Arena from './../components/Arena/arena.component';
import Menu from '../components/Menu/menu-item.component';
import Grid from '../components/Grid/grid.component';
import Stack from 'react-bootstrap/esm/Stack';
import Form from '../components/Forms/Forms.component';

const AppRouter = () => {
   return (
      <BrowserRouter>
          <Route path="/" componenet={Header} exact/>
          <Route path="Arena" componenet={Arena} />
          <Route path="Menu" componenet={Menu} />
          <Route path="Grid" componenet={Grid} />
          <Route path="Stack" componenet={Stack} />
          <Route path="Form" componenet={Form} />
      </BrowserRouter>
   );
}

export default AppRouter;