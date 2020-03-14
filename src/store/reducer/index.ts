import { ADD_STUDENT, EDIT_STUDENT } from '../actionTypes';
import { IStudentList } from '../../models/student';
import { IActionForReducer } from '../models';

const initialState: IStudentList = {
    dfdf: {id: 'dfdf', name: 'Name', surname: 'Surname', patronymic: 'Patronymic', dateBirth: new Date(), progress: 'fine'},
    dfsdf: {id: 'dfsdf', name: 'Andrey', surname: 'Fomin', patronymic: 'Akexandrovich', dateBirth: new Date('1984-06-17'), progress: 'fine'}
};

export default (state: IStudentList = initialState, action: IActionForReducer): IStudentList => {
    const { type, payload } = action;
    switch (type) {
        case ADD_STUDENT :
            return ({
                ...state,
                [payload.id]: payload
            })
        case EDIT_STUDENT : {
            const newState = {...state};
            newState[payload.id] = payload;
            return newState;
        }
        default :
            return state;
    }
};