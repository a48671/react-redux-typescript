import { ADD_STUDENT, EDIT_STUDENT, GET_STUDENTS, REMOVE_STUDENT } from '../actionTypes';
import { IStudent, IStudentList } from '../../models/student';
import { IActionForReducer } from '../models';

export const getStudents = (students: IStudentList): IActionForReducer => ({
    type: GET_STUDENTS,
    payload: students
});

export const addStudent = (student: IStudent): IActionForReducer => ({
    type: ADD_STUDENT,
    payload: student
});

export const editStudent = (student: IStudent): IActionForReducer => ({
    type: EDIT_STUDENT,
    payload: student
});

export const removeStudent = (id: string): IActionForReducer => ({
    type: REMOVE_STUDENT,
    payload: id
});