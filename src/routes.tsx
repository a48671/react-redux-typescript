import React from "react";
import { Switch, Route } from 'react-router-dom';
import Students from "./pages/Students";
import Edit from "./pages/Edit";

const Routs: React.FC = () => (
    <Switch>
        <Route path='/' component={Students} exact/>
        <Route path='/edit/:student'  component={Edit}/>
    </Switch>
);

export default Routs;