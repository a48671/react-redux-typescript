import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: block;
    padding: 10px 0;
    color: #fff;
    background-color: darkcyan;
`;

export const NavList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Button = styled(NavLink)`
    display: block;
    padding: 10px 20px;
    border-radius: 4px;
    color: #fff;
    border: 1px solid #fff;
    &.active {
        pointer-events: none;
        opacity: 0;
    }
    &:hover {
        color: yellow;
        border: 1px solid yellow;
    }
`;