import React from 'react';
import { Wrapper } from './styled';
import { Container } from '../../styled';

const Header: React.FC<{title: string}> = ({title}) => {
    return (
        <Wrapper>
            <Container>{title}</Container>
        </Wrapper>
    );
};

export default Header;