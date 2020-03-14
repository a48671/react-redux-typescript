import { createStore } from 'redux';
import studentsReducer from './reducer';

export default createStore(studentsReducer);