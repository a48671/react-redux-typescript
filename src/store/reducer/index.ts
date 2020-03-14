import { ADD_STUDENT, GET_STUDENTS, EDIT_STUDENT, REMOVE_STUDENT } from '../actionTypes';
import { IStudentList } from '../../models/student';
import { IActionForReducer } from '../models';

const initialState: IStudentList = {};

export default (state: IStudentList = initialState, action: IActionForReducer): IStudentList => {
    const { type, payload } = action;
    switch (type) {

        case GET_STUDENTS :
            return ({
                ...payload
            });

        case ADD_STUDENT : {
            const students = {
                ...state,
                [payload.id]: payload
            }
            localStorage.setItem('students', JSON.stringify(students));
            return students;
        }

        case EDIT_STUDENT : {
            const students = {...state};
            students[payload.id] = payload;
            localStorage.setItem('students', JSON.stringify(students));
            return students;
        }

        case REMOVE_STUDENT : {
            const students = {...state};
            delete students[payload];
            localStorage.setItem('students', JSON.stringify(students));
            return students;
        }

        default :
            return state;
    }
};