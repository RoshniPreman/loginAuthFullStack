import { Component, OnInit } from '@angular/core';
import { Login } from 'src/model/login';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private route: Router) { }
  
  userName: string = "";
  userPassword: string = "";
  errorMessage: string = "";

  /* Login using username & password using restapi
  */
  loginClick() {
    let loginRequest: Login = { userName: this.userName, password: this.userPassword };
    
    this.loginService.authenticate(loginRequest).subscribe({
      next: () => {
          this.route.navigate(['/employeeDashboard']);
      },
      error: (error) => {
          this.errorMessage = error;
      }
    });
  }

  ngOnInit(): void {
  }

}
