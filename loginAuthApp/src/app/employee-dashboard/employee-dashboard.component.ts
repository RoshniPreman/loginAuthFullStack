import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';
import { EmployeeService } from 'src/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  employeeList: Array<Employee> = [];

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployees();
  }

  editEmployee(employeeId: number) {
    this.router.navigate(['/edit/' + employeeId]);
  }

  deleteEmployee(index: number) {
    this.employeeList.splice(index, 1);
  }

}
