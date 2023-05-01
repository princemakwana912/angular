import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TemplateFormComponent } from './employee-list/template-form/template-form.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    TemplateFormComponent
  ],
  imports: [
    CommonModule,SharedModule,RouterModule,FormsModule
  ],

  exports:[
    EmployeeListComponent,
    EmployeeDetailsComponent,
    TemplateFormComponent  

  ]
})
export class EmployeeModule { }
