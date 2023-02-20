import { Injectable } from '@angular/core';
import { Employee } from "src/model/employee";
import { employees } from "src/trainingData/employees";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees!: Array<Employee>;
  constructor(private http: HttpClient) { }

  getEmployees() {
    this.employees = employees;
    return employees;
  }

  getEmployeeById(employeeId: number) {
    return employees.filter((value) => value.id === employeeId)[0];
  }

  editEmployee(employee: Employee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === employee.id) {
        this.employees[i] = employee;
      }
    }
  }
}
