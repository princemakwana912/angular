import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loaderfol/loader/loader.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoaderInterceptor } from './loader-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass : LoaderInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
