import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';
import Layout from "../../Layout";
import { toDate } from "../../utils/toDate";
import {Container} from "../../styled";
import { addStudent } from '../../store/actions';
import { IStudent } from "../../models/student";

interface IAddProps {
    add(student: IStudent): void
}

const Add: React.FC<IAddProps> = ({add}): React.ReactElement => {

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [dateBirth] = useState<Date>(new Date());

    const textInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;
        const name: string = event.target.name;
        switch (name) {
            case 'name' :
                setName(value);
                return;
            case 'surname' :
                setSurname(value);
                return;
            case 'patronymic' :
                setPatronymic(value);
                return;
        }
    };

    const history = useHistory();

    const onClickAddHandler = (): void => {
        add({
            id: shortid.generate(),
            name,
            surname,
            patronymic,
            dateBirth
        });
        history.push('/');
    };

    return (
        <Layout title='Add student'>
            <Container>
                <input
                    type="text" value={name}
                    name='name'
                    placeholder='Name'
                    onChange={textInputChangeHandler}
                />
                <input
                    type="text" value={surname}
                    name='surname'
                    placeholder='Surname'
                    onChange={textInputChangeHandler}
                />
                <input
                    type="text" value={patronymic}
                    name='patronymic'
                    placeholder='Patronymic'
                    onChange={textInputChangeHandler}
                />
                <div>{toDate(dateBirth)}</div>
                <button onClick={onClickAddHandler}>Add student</button>
            </Container>
        </Layout>
    );
};

const mapDispatchToProps: Function = (dispatch: Function) => ({
    add: (student: IStudent) => dispatch(addStudent(student))
});

export default connect(null, mapDispatchToProps)(Add);