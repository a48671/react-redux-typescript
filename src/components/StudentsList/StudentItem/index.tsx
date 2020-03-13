import React from 'react';
import { IStudent } from '../../../models/student';
import { Wrapper, FullName, DateBirth, Progress } from './styled';

const StudentItem: React.FC<IStudent> = ({name, surname, patronymic, dateBirth, progress}) => {
    return (
        <Wrapper>
            <FullName>{`${patronymic} ${name} ${surname}`}</FullName>
            <DateBirth>{`${dateBirth.getDate()} ${dateBirth.getMonth()} ${dateBirth.getFullYear()}`}</DateBirth>
            <Progress>{progress}</Progress>
        </Wrapper>
    );
};

export default StudentItem;