import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `<h2>Employee Details</h2>
			<ul *ngFor="let employee of employees">
				<li>{{employee.id}}. {{employee.name}} - {{employee.gender}}</li>
			</ul>`
})
export class EmployeeDetailComponent implements OnInit {
	employees = [];

	constructor(private _employeeService: EmployeeService) { }
	ngOnInit() {
		this._employeeService.getEmployees()
			.subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
}
