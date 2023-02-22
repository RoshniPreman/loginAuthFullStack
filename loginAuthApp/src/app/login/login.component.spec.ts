import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [LoginService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #loginClick & call authenticate function from loginservice', () => {
    component.userName = 'roshni';
    component.userPassword = '#abcd2';

    spyOn(router, 'navigate');
    spyOn(loginService, 'authenticate').and.callThrough();
    component.loginClick();

    expect(loginService.authenticate).toHaveBeenCalledOnceWith({
      userName: component.userName,
      password: component.userPassword
    });
  });

  it('should call #authenticate & navigate to employeedashboard on success', () => {
    component.userName = 'roshni';
    component.userPassword = '#abcd2';

    spyOn(router, 'navigate');
    spyOn(loginService, 'authenticate').and.returnValue(of({
      "username": "roshni",
      "password": "12345",
      "hash": "de35f7229459a7a55b2ecfe8d6c6dc6b23a0c964",
      "id": 1
    }));
    component.loginClick();

    expect(loginService.authenticate).toHaveBeenCalledOnceWith({
      userName: component.userName,
      password: component.userPassword
    });
    expect(router.navigate).toHaveBeenCalledOnceWith(['/employeeDashboard']);
  });

  it('should call #authenticate & show error banner on failure', () => {
    component.userName = 'ajith';
    component.userPassword = '#abcd2';
    const errorObj = new Error('Not found: 404');

    spyOn(loginService, 'authenticate').and.returnValue(throwError(() => errorObj ));
    component.loginClick();

    expect(loginService.authenticate).toHaveBeenCalledOnceWith({
      userName: component.userName,
      password: component.userPassword
    });

    expect(component.errorMessage).toBeTruthy();

  });


});
