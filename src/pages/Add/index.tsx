import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';
import Layout from "../../Layout";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styled";
import { addStudent } from '../../store/actions';
import { IStudent, IStudentProgress, options } from "../../models/student";
import Input from "../../components/Input";
import { DateBirth, FieldItem, Fields, Wrapper, Button } from './styled';
import { Title as TitleField } from '../../components/Input/styled';
import Select from 'react-select';

interface IAddProps {
    add(student: IStudent): void
}

const Add: React.FC<IAddProps> = ({add}): React.ReactElement => {

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [dateBirth, setDateBirth] = useState<Date>(new Date());
    const [progress, setProgress] = useState<IStudentProgress>(null);

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

    const onChangeDateHandler = (date: Date) => setDateBirth(date);

    const onChangeProgress = (progress: any) => setProgress(progress ? progress : null);

    const history = useHistory();

    const onClickAddHandler = (): void => {
        add({
            id: shortid.generate(),
            name,
            surname,
            patronymic,
            dateBirth,
            progress
        });
        history.push('/');
    };

    return (
        <Layout title='Add student'>
            <Wrapper>
                <Container>
                    <Fields>
                        <FieldItem>
                            <Input
                                title='Name'
                                type="text" value={name}
                                name='name'
                                placeholder='Name'
                                onChange={textInputChangeHandler}
                            />
                        </FieldItem>
                        <FieldItem>
                            <Input
                                title='Surname'
                                type="text" value={surname}
                                name='surname'
                                placeholder='Surname'
                                onChange={textInputChangeHandler}
                            />
                        </FieldItem>
                        <FieldItem>
                            <Input
                                title='Patronymic'
                                type="text" value={patronymic}
                                name='patronymic'
                                placeholder='Patronymic'
                                onChange={textInputChangeHandler}
                            />
                        </FieldItem>
                        <FieldItem>
                            <TitleField>Date Birth</TitleField>
                            <DateBirth
                                selected={dateBirth}
                                onChange={onChangeDateHandler}
                            />
                        </FieldItem>
                        <FieldItem>
                            <TitleField>Progress</TitleField>
                            <Select
                                value={progress}
                                onChange={onChangeProgress}
                                options={options}
                                placeholder='Progress'
                            />
                        </FieldItem>
                        <FieldItem>
                            <Button
                                onClick={onClickAddHandler}
                                disabled={!name || !surname || !patronymic}
                            >
                                Add student
                            </Button>
                        </FieldItem>
                    </Fields>
                </Container>
            </Wrapper>
        </Layout>
    );
};

const mapDispatchToProps: Function = (dispatch: Function) => ({
    add: (student: IStudent) => dispatch(addStudent(student))
});

export default connect(null, mapDispatchToProps)(Add);