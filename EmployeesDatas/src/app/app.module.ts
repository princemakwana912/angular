import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EmployeeModule } from './employee/employee.module';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
