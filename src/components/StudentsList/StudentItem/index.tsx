import React from 'react';
import { Link } from 'react-router-dom';
import { IStudent } from '../../../models/student';
import { Wrapper, FullName, DateBirth, Progress, Edit } from './styled';

const toDate = function(date: Date): string {
    return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(date);
};

const StudentItem: React.FC<IStudent> = ({id, name, surname, patronymic, dateBirth, progress}) => {
    return (
        <Wrapper>
            <FullName>{`${patronymic} ${name} ${surname}`}</FullName>
            <DateBirth>{toDate(dateBirth)}</DateBirth>
            <Progress>{progress}</Progress>
            <Edit>
                <Link to={`/edit/${id}`}>Edit</Link>
            </Edit>
        </Wrapper>
    );
};

export default StudentItem;