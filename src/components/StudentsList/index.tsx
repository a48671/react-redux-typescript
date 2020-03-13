import React from 'react';
import { Wrapper } from './styled';
import StudentItem from "./StudentItem";
import { IStudent } from '../../models/student';

const students: IStudent[] = [
    {id: 'sda', name: 'Name', surname: 'Surname', patronymic: 'Patronymic', dateBirth: new Date(), progress: 'fine'},
    {id: 'sszds', name: 'Andrey', surname: 'Fomin', patronymic: 'Akexandrovich', dateBirth: new Date('1984-06-17'), progress: 'fine'}
];

const StudentsList = () => {
    return (
        <Wrapper>
            {students.map(student => (
                <StudentItem
                    key={student.id}
                    id={student.id}
                    patronymic={student.patronymic}
                    name={student.name}
                    surname={student.surname}
                    dateBirth={student.dateBirth}
                    progress={student.progress}
                />
            ))}
        </Wrapper>
    );
};

export default StudentsList;