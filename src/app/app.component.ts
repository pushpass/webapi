
import { Component } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';
@Component({
  selector: 'app-root',
  template: `<h1>Random Company</h1>
  <app-employee></app-employee>`,
  providers: [EmployeeserviceService]
})
export class AppComponent { }