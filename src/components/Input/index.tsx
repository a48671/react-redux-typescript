import React from 'react';
import { Wrapper, Title, Field } from './styled';

interface IInputProps {
    onChange(event: React.ChangeEvent): void,
    type: string,
    placeholder: string,
    value: string,
    name: string,
    title: string
}

const Input: React.FC<IInputProps> = ({onChange, type, placeholder, value, name, title}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Field type={type} onChange={onChange} placeholder={placeholder} value={value} name={name}/>
        </Wrapper>
    );
};

export default Input;