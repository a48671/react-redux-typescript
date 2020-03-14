import React from 'react';
import { Container } from '../../styled';
import Layout from "../../Layout";
import StudentsList from "../../components/StudentsList";

const Students = () => {
    return (
        <Layout  title='Students'>
            <Container>
                <StudentsList/>
            </Container>
        </Layout>
    );
};

export default Students;