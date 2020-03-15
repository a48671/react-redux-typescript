import styled from "styled-components";
import DatePicker from 'react-datepicker';

export const DateBirth = styled(DatePicker)`
    display: block;
    width: 100%;
    height: 38px;
	border: 1px solid #C2C2C2;
	box-shadow: 1px 1px 4px #EBEBEB;
	border-radius: 3px;
	padding: 7px;
	outline: none;
	text-transform: capitalize;
`;

export const Wrapper = styled.div`
    display: block;
    padding: 30px 0;
`;

export const Fields = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 30px;
`;

export const FieldItem = styled.div`
    display: block;
    margin-bottom: 20px;
    width: calc(33% - 20px);
    .react-datepicker-wrapper {
	    display: block;
	    width: 100%;
	}
`;

interface IButtonProps {
    removeButton?: boolean
}

export const Button = styled.button`
    display: block;
    margin-left: auto;
    width: ${(p: IButtonProps) => p.removeButton ? '100px' : '100%'};
	padding: 10px 20px;
	background-color: ${(p: IButtonProps) => p.removeButton ? 'red' : 'darkcyan'};
    border: 1px solid ${(p: IButtonProps) => p.removeButton ? 'red' : 'darkcyan'};	
    border-radius: 4px;
	color: #fff;
	cursor: pointer;
	text-align: center;
	&:hover {
	    background-color: transparent;
        color: ${p => p.removeButton ? 'red' : 'darkcyan'};
	}
	&:disabled {
        opacity: .3;
    }
`;