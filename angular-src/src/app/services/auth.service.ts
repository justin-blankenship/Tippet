import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken: any;
	user: any;

  constructor(private http:Http) { }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  registerUser(user) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('users/register', user, {headers: headers})
  		.map(res => res.json());
  }

  storeUserData(token, user) {
  	localStorage.setItem('token', token);
  	localStorage.setItem('user', JSON.stringify(user));
  	this.authToken = token;
  	this.user = user;
  }
  
}