import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeComponent } from './office.component';
import { ManagerialComponent } from './components/managerial/managerial.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  { 
    path: '', 
    component: OfficeComponent,
    children: [
      { path: 'managerial', component: ManagerialComponent },
      { path: 'employee', component: EmployeeComponent }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
