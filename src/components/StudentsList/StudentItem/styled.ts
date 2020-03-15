import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Container as MainContainer } from '../../../styled';

export const Wrapper = styled.div`
    display: block;
    width: 100%;
    font-size: 18px;
    padding: 10px 0;
    &:nth-child(odd) {
        background-color: gainsboro;
    }
`;

export const Container = styled(MainContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Item = styled.div`
    display: block;
    text-align: left;
    padding: 10px;
`;

export const FullName = styled(Item)`
    text-transform: capitalize;
    width: 350px;
`;

export const DateBirth = styled(Item)`
    width: 200px;
`;

export const Progress = styled(Item)`
    width: 100px;
    text-align: center;
`;

export const Edit = styled(Item)`
    width: 100px;
`;

export const EditButton = styled(Link)`
    display: block;
    width: 80px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 4px;
    color: #333;
    border: 1px solid #333;
    margin-left: auto;
    &:hover {
        color: midnightblue;
        border: 1px solid midnightblue;
    }
`;