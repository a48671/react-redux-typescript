import React, { Fragment } from 'react';
import { GlobalStyle, Container } from './styled';
import StudentsList from './components/StudentsList';

function App() {
    return (
        <Fragment>
            <GlobalStyle/>
            <Container>
                <StudentsList/>
            </Container>
        </Fragment>
    );
}

export default App;
