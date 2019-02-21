import { Component, OnInit } from '@angular/core';
  import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee',
  template: `<h2>emp</h2>
  <div *ngFor = "let employee of employees">{{employee.name}}
</div>`
  
})
export class EmployeeComponent implements OnInit {
  
  employees = [];
  constructor(private _empservice:EmployeeserviceService) { }
  
  ngOnInit() {
    this._empservice.getemployees()
    .subscribe(resempdata => this.employees=resempdata);

  }

}
