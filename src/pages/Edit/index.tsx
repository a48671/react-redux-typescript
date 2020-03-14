import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from '../../styled';
import { editStudent } from '../../store/actions';
import { toDate } from '../../utils/toDate';
import {IStudent, IStudentList} from '../../models/student';
import Header from "../../components/Header";

interface IEditProps {
    students: IStudentList
    edit(student: IStudent): void,
    match: {
        params: {
            student: string
        }
    }
}

const Edit: React.FC<IEditProps> = ({ edit, match, students }) => {

    const studentId: string = match.params.student;
    const student: IStudent = students[studentId];

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
        setName(event.target.value);
    };

    const history = useHistory();

    const onClickEditHandler = (): void => {
        edit({
            ...student,
            name,
            surname,
            patronymic,
            dateBirth
        });
    };

    return (
        <div>
            <Header title='Edit'/>
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
                <div onClick={() => history.push('/')}>Go to student list</div>
            </Container>
        </div>
    );
};

const mapStateToProps = (state: IStudentList): {students: IStudentList} => ({
    students: state
});

const mapDispatchToProps: Function = (dispatch: Function): object => ({
    edit: (student: IStudent) => dispatch(editStudent(student))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);