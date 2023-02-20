import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from 'src/interceptors/http-config.interceptor';
import { ErrorHandlerInterceptor } from 'src/interceptors/error-handler.interceptor';

import { HomeComponent } from './home/home.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeDashboardComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
