import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styled';
import Routs from "./routes";


function App() {
    return (
        <Fragment>
            <GlobalStyle/>
            <Router>
                <Routs/>
            </Router>
        </Fragment>
    );
}

export default App;
