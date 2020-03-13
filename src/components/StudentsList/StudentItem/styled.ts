import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid #aeaeae;
`;

const Item = styled.div`
    display: block;
    text-align: left;
    padding: 10px 0;
`;

export const FullName = styled(Item)`
    width: 350px;
`;

export const DateBirth = styled(Item)`
    width: 100px;
`;

export const Progress = styled(Item)`
    width: 100px;
`;