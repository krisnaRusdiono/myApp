import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeComponent } from './office.component';
import { ManagerialComponent } from './components/managerial/managerial.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { authChildGuard } from 'src/app/guards/auth-child.guard';
import { ManagerialDetailComponent } from './components/managerial-detail/managerial-detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: OfficeComponent,
    canActivateChild: [authChildGuard],
    children: [
      { path: 'managerial', component: ManagerialComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'managerial/:id', component: ManagerialDetailComponent }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
