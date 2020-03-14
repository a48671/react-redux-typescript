import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from '../../styled';
import Layout from "../../Layout";
import { editStudent, removeStudent } from '../../store/actions';
import { toDate } from '../../utils/toDate';
import { IStudent, IStudentList } from '../../models/student';

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

    const [name, setName] = useState<string>(student.name);
    const [surname, setSurname] = useState<string>(student.surname);
    const [patronymic, setPatronymic] = useState<string>(student.patronymic);
    const [dateBirth] = useState<Date>(student.dateBirth);

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
            dateBirth
        });
        history.push('/')
    };

    const onClickRemoveHandler = (): void => {
        remove(studentId);
        history.push('/')
    };


    // if invalid id students from url go to maim page
    if (!Object.keys(student).length) {
        return (
            <Layout title='Edit'>
                <Container>
                    Student wes not found
                    <div onClick={() => history.push('/')}>Go to student list</div>
                </Container>
            </Layout>
        )
    }

    return (
        <Layout title='Edit'>
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
                <button onClick={onClickEditHandler}>Edit</button>
                <button onClick={onClickRemoveHandler}>Remove student</button>
                <div onClick={() => history.push('/')}>Go to student list</div>
            </Container>
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