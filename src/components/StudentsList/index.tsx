import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './styled';
import StudentItem from "./StudentItem";
import { IStudentList, IStudent } from '../../models/student';

interface IStudentsListProps {
    students: IStudentList
}

const StudentsList: React.FC<IStudentsListProps> = ({students}) => {
    const studentsKeys: string[] = Object.keys(students);
    if (!studentsKeys.length) {
        return (
            <Wrapper>No students yet</Wrapper>
        );
    }
    return (
        <Wrapper>
            {studentsKeys.map(key => {
                const student: IStudent = students[key];
                return (
                    <StudentItem
                        key={key}
                        id={student.id}
                        patronymic={student.patronymic}
                        name={student.name}
                        surname={student.surname}
                        dateBirth={student.dateBirth}
                        progress={student.progress}
                    />
                )
            })}
        </Wrapper>
    );
};

const mapStateToProps = (state: IStudentList): {students: IStudentList} => ({
    students: state
});

export default connect(mapStateToProps)(StudentsList);