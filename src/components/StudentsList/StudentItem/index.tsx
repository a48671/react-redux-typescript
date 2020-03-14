import React from 'react';
import { Link } from 'react-router-dom';
import { IStudent } from '../../../models/student';
import { Wrapper, FullName, DateBirth, Progress, Edit } from './styled';
import { toDate } from '../../../utils/toDate';

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