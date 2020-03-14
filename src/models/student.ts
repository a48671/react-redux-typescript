export interface IStudent {
    id: string,
    name: string,
    surname: string,
    patronymic: string,
    dateBirth: Date,
    progress?: 'fine' | 'well' | 'satisfactorily' | 'unsatisfactorily'
}

export interface IStudentList {
    [key: string]: IStudent
}