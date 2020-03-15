import React from 'react';
import { IStudent } from '../../../models/student';
import { Wrapper, FullName, DateBirth, Progress, Edit, Container, EditButton } from './styled';

import { toDate } from '../../../utils/toDate';

const StudentItem: React.FC<IStudent> = ({id, name, surname, patronymic, dateBirth, progress}) => {
    return (
        <Wrapper>
            <Container>
                <FullName>{`${patronymic} ${name} ${surname}`}</FullName>
                <DateBirth>{toDate(dateBirth)}</DateBirth>
                <Progress>{(progress && progress.label) ? progress.label : null}</Progress>
                <Edit>
                    <EditButton to={`/edit/${id}`}>Edit</EditButton>
                </Edit>
            </Container>
        </Wrapper>
    );
};

export default StudentItem;