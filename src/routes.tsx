import React from "react";
import { Switch, Route } from 'react-router-dom';
import Students from "./pages/Students";
import Edit from "./pages/Edit";
import Add from "./pages/Add";

const Routs: React.FC = () => (
    <Switch>
        <Route path='/add/'  component={Add}/>
        <Route path='/edit/:student'  component={Edit}/>
        <Route path='/'  component={Students}/>
    </Switch>
);

export default Routs;