import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styled';
import Routs from "./routes";
import { IStudentList } from './models/student';
import { getStudents } from './store/actions';

interface IAppProps {
    getStudentsFromProps?: (students: IStudentList) => void,
    students: IStudentList
}

const App: React.FC<IAppProps> = ({getStudentsFromProps, students}): React.ReactElement => {

    useEffect(() => {

        const studentsFromLocalStorageJSON: string = localStorage.getItem('students') || '{}';

        const studentsFromLocalStorage: IStudentList = JSON.parse(studentsFromLocalStorageJSON);

        if (getStudentsFromProps) {
            getStudentsFromProps(studentsFromLocalStorage);
        }
    }, [getStudentsFromProps]);

    return (
        <Fragment>
            <GlobalStyle/>
            <Router>
                <Routs/>
            </Router>
        </Fragment>
    );
}

const mapStateToProps = (state: IStudentList): {students: IStudentList} => ({
    students: state
});

const mapDispatchToProps: Function = (dispatch: Function) => ({
    getStudentsFromProps: (students: IStudentList) => dispatch(getStudents(students))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);