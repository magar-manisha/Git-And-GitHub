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
