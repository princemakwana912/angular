import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { EmployeeModule } from '../employee/employee.module';



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent
  
  ],
  imports: [
    CommonModule,
    EmployeeModule
  ],

  exports:[
    TopbarComponent
  ]
})
export class CoreModule { }
