import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
  	if(user.name == undefined || user.email == undefined || user.password == undefined) {
  		return false;
  	} else {
  		return true;
  	}
  }

 //Ensure email address is valid with regular expression
  validateEmail(email) {
  	const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return regExp.test(String(email).toLowerCase()); 
  }
}
