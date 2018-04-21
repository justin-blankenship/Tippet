import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	employees = [];

	constructor(private _employeeService: EmployeeService) { }
	ngOnInit() {
		this._employeeService.getEmployees()
			.subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
}
