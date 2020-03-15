import React from 'react';
import { Container } from '../../styled';
import { Wrapper, Button, NavList } from './styled';


const Footer: React.FC = (): React.ReactElement => {

    return (
        <Wrapper>
            <Container>
                <NavList>
                    <Button to='/' exact>Students</Button>
                    <Button to='/add'>Add students</Button>
                </NavList>
            </Container>
        </Wrapper>
    );
};

export default Footer;