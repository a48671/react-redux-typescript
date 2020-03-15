export interface IStudentProgressOption {
    value: 'fine' | 'well' | 'satisfactorily' | 'unsatisfactorily',
    label: 'fine' | 'well' | 'satisfactorily' | 'unsatisfactorily'
}

export type IStudentProgress = IStudentProgressOption | null | undefined;

export interface IStudent {
    id: string,
    name: string,
    surname: string,
    patronymic: string,
    dateBirth: Date,
    progress?: IStudentProgress
}

export interface IStudentList {
    [key: string]: IStudent
}

export const options: IStudentProgressOption[] = [
    { value: "fine", label: "fine" },
    { value: "well", label: "well" },
    { value: "satisfactorily", label: "satisfactorily" },
    { value: "unsatisfactorily", label: "unsatisfactorily" },
];