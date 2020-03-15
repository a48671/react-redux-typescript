import React from 'react';
import Layout from "../../Layout";
import StudentsList from "../../components/StudentsList";

const Students = () => {
    return (
        <Layout  title='Students'>
            <StudentsList/>
        </Layout>
    );
};

export default Students;