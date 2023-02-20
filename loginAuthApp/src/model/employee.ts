export interface Employee{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    state: string;
    district: string;
    employmentType: string;
    gender: string;
    skills: Array<string>
    address: string;
    imageName: string;
}

type E1 =  {
    id: number;
    name: string
}