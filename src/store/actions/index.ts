import { ADD_STUDENT, EDIT_STUDENT } from '../actionTypes';
import { IStudent } from '../../models/student';

export const addStudent = (student: IStudent) => ({
    type: ADD_STUDENT,
    payload: student
});

export const editStudent = (student: IStudent) => ({
    type: EDIT_STUDENT,
    payload: student
});