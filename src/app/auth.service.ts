import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
result: any;
  constructor(private http: Http) { }

  registerCustomer(data){
    console.log(data);
    return this.http.post('/saveCustomer', data).map(response => this.result = response.json());
  }

}
