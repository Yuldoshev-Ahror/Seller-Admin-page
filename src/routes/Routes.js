import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import AdminProtectedRoute from './AdminProtectedRoute';
import Dashboard from '../pages/Dashboard';
import Helpdesk from '../pages/Helpdesk';
import Product from '../pages/Product';
import Invoices from '../pages/Invoices';
import NotFound from '../components/NotFound';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <AdminProtectedRoute exact path='/dashboard' component={Dashboard} />
        <AdminProtectedRoute exact path='/helpdesk' component={Helpdesk} />
        <AdminProtectedRoute exact path='/product' component={Product} />
        <AdminProtectedRoute exact path='/invoices' component={Invoices} />
        <Redirect exact from='/' to='/dashboard' />
        <Route path='/*' component={NotFound} />
      </Switch>
    </>
  );
}
