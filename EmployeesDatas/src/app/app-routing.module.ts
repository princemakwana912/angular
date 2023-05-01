import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
  // { path: 'prince', component:EmployeeDetailsComponent },
  // { path: 'praveen', component:EmployeeDetailsComponent },
  // { path: 'emp-list', component:EmployeeListComponent},
  // { path: 'emp-list/:id/:name', component:EmployeeDetailsComponent},
  // {path: 'emp-list',loadChildren:() => import('./employee/employee-list/employee-list.component').then(list => list.EmployeeListComponent)},
  // {path: 'emp-list/:id/:name',loadChildren:() => import('./employee/employee-details/employee-details.component').then(detail => detail.EmployeeDetailsComponent)},
  {path : 'emp-list' , loadChildren:() => import('./employee/employee.module').then(list => list.EmployeeModule)},
  {path : 'emp-list/:id/:name' , loadChildren:() => import('./employee/employee.module').then(lists => lists.EmployeeModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
