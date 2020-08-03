import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Landing} />

    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
  </Switch>
);

export default Routes;
