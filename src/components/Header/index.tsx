import React from 'react';
import { Wrapper, Title } from './styled';
import { Container } from '../../styled';

const Header: React.FC<{title: string}> = ({title}): React.ReactElement => {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
            </Container>
        </Wrapper>
    );
};

export default Header;