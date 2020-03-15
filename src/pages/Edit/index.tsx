import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from '../../styled';
import Layout from "../../Layout";
import { editStudent, removeStudent } from '../../store/actions';
import "react-datepicker/dist/react-datepicker.css";
import { IStudent, IStudentList, IStudentProgress, options } from '../../models/student';
import Select from "react-select";
import { DateBirth, FieldItem, Fields, Wrapper, Button } from '../Add/styled';
import { Title as TitleField } from '../../components/Input/styled';
import Input from "../../components/Input";

interface IEditProps {
    students: IStudentList
    edit(student: IStudent): void,
    remove(id: string): void
    match: {
        params: {
            student: string
        }
    }
}

const Edit: React.FC<IEditProps> = ({ edit, match, students, remove }) => {

    if (!Object.keys(students).length) {
        students = JSON.parse(localStorage.getItem('students') || '{}');
    }

    const studentId: string = match.params.student;

    const history = useHistory();

    const student: IStudent = students[studentId] || {};

    const dateBirthObject = typeof student.dateBirth === "string" ? new Date(student.dateBirth) : student.dateBirth;

    const [name, setName] = useState<string>(student.name);
    const [surname, setSurname] = useState<string>(student.surname);
    const [patronymic, setPatronymic] = useState<string>(student.patronymic);
    const [dateBirth, setDateBirth] = useState<Date>(dateBirthObject);
    const [progress, setProgress] = useState<IStudentProgress>(student.progress || null);

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

    const onClickEditHandler = (): void => {
        edit({
            ...student,
            name,
            surname,
            patronymic,
            dateBirth,
            progress
        });
        history.push('/')
    };

    const onClickRemoveHandler = (): void => {
        remove(studentId);
        history.push('/')
    };

    const onChangeDateHandler = (date: Date) => setDateBirth(date);

    const onChangeProgress = (progress: any) => setProgress(progress ? progress : null);

    // if invalid id students from url go to maim page
    if (!Object.keys(student).length) {
        return (
            <Layout title='Edit'>
                <Container>
                    Student wes not found
                </Container>
            </Layout>
        )
    }

    return (
        <Layout title='Edit'>
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
                                onClick={onClickEditHandler}
                                disabled={!name || !surname || !patronymic}
                            >
                                Edit
                            </Button>
                        </FieldItem>
                    </Fields>
                    <Button onClick={onClickRemoveHandler} removeButton={true}>Remove</Button>
                </Container>
            </Wrapper>
        </Layout>
    );
};

const mapStateToProps = (state: IStudentList): {students: IStudentList} => ({
    students: state
});

const mapDispatchToProps: Function = (dispatch: Function) => ({
    edit: (student: IStudent) => dispatch(editStudent(student)),
    remove: (id: string) => dispatch(removeStudent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);