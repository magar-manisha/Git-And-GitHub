export interface student{
    name: string;
    roll: string;
    age: number;
}

export type employe = {
    name: string;
    phoneNo: string;
    salary: number;
}
type stringornumber = (string | number)[]

export type actor = {
    name: string;
    phoneNo?: string;
    equipment: stringornumber;
}

export interface Transactionobj{
    readonly [index: string]:number
    pizza: number;
    book: number;
    job: number;
}

export interface Transactionname{
    name: string
    pizza: number;
    book: number;
    job: number;
}

export interface BoolCheck<T>{
    arg: T;
    is: boolean;
}