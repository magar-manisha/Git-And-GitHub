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

export type actor = {
    name: string;
    phoneNo?: string;
    equipment: (number | string)[];
}