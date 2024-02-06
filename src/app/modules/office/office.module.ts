import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { ManagerialComponent } from './components/managerial/managerial.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ManagerialDetailComponent } from './components/managerial-detail/managerial-detail.component';


@NgModule({
  declarations: [
    OfficeComponent,
    ManagerialComponent,
    EmployeeComponent,
    ManagerialDetailComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule
  ]
})
export class OfficeModule { }
