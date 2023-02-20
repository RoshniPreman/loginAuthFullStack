import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  authenticate(request: Login){

    return this.httpClient.get('assets/data/login/' + request.userName + '.json', {
      reportProgress: true,
      responseType: 'json'
    });
  }
}
