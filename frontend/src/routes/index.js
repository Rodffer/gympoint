import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';

import Help from '../pages/Help';
import Plan from '../pages/Plan';
import PlanForm from '../pages/Plan/Form';
import Registration from '../pages/Registration';
import Student from '../pages/Student';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/student" component={Student} isPrivate />
      <Route path="/registration" component={Registration} isPrivate />

      <Route path="/plan" exact component={Plan} isPrivate />
      <Route path="/plan/create" exact component={PlanForm} isPrivate />
      <Route path="/plan/edit/:id" exact component={PlanForm} isPrivate />

      <Route path="/help" component={Help} isPrivate />
    </Switch>
  );
}
