import React from 'react';
import { Container } from '../../styled';
import Header from "../../components/Header";
import StudentsList from "../../components/StudentsList";

const Students = () => {
    return (
        <div>
            <Header title='Students'/>
            <Container>
                <StudentsList/>
            </Container>
        </div>
    );
};

export default Students;