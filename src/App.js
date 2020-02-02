import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import { Homepage, Login, Tables, NewTableOrder, Table, NewEventOrder, Event, Waiter, NewWaiterOrder, WaiterOrder, Kitchen } from './components/views';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/booking/new'} component={NewTableOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/booking/:id'} component={Table} />
          <Route exact path={process.env.PUBLIC_URL + '/events/new'} component={NewEventOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/events/:id'} component={Event} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewWaiterOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
