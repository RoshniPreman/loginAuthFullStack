import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee';
import { employees } from 'src/trainingData/employees';
import { EmployeeService } from 'src/service/employee.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StateDistrict, District } from 'src/model/stateDistrict';
import { stateDistrictList } from 'src/trainingData/stateDistrict';
import { skills } from 'src/trainingData/skills';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,
    private fb: FormBuilder, private router: Router) {

    this.employeeForm = this.fb.group({
      id: [],
      firstName: [''],
      lastName: [''],
      email: [''],
      age: [],
      state: [''],
      district: [''],
      employmentType: [''],
      gender: [''],
      skills: [[]],
      address: [''],
      imageUrl: ['']
    })

  }

  employeeId!: number;
  selectedEmployee!: Employee;
  employeeForm: FormGroup;
  stateDistrictList: Array<StateDistrict> = stateDistrictList;
  districtList!: Array<District>;
  skillSet: Array<String> = skills;

  ngOnInit(): void {

    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));

    this.selectedEmployee = this.employeeService.getEmployeeById(this.employeeId);
    this.employeeForm.patchValue(this.selectedEmployee);
    this.changeState({ target: { value: this.selectedEmployee.state } });
  }

  changeState(event: any) {
    this.employeeForm.get('state')?.setValue(event.target.value);
    this.districtList = this.stateDistrictList.filter((state) => state.stateName === event.target.value)[0]['district'];
  }

  changeDistrict(event: any) {
    this.employeeForm.get('district')?.setValue(event.target.value);
  }

  changeEmploymentType(event: any) {
    this.employeeForm.get('employmentType')?.setValue(event.target.value);
  }

  changeGender(event: any) {
    this.employeeForm.get('gender')?.setValue(event.target.value);
  }

  submitEmployee() {
    console.log(this.employeeForm);
 
    this.employeeService.editEmployee(this.employeeForm.value);
    this.router.navigate(['employeeDashboard']);
  }

}
