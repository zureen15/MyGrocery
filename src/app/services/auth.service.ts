import { Injectable } from '@angular/core';
import { off } from 'process';
import {BehaviorSubject, Observable, of } from 'rxjs';


const TOKEN_KEY = 'user-access-token'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : Observable <any>;
 private authState = new BehaviorSubject (null) ;

  constructor(private storage: Storage) { 
    this.user =  this.authState.asObservable();
  }


    signIn (credentials) : Observable<any> {
      let email = credentials.email;
      let password = credentials.password;
      let user = null;

      if ( email === 'admin' && password === 'admin') {
        user = {email, role: 'ADMIN'} ;
      } else user = { email, role: 'CUSTOMER'};

      this.authState.next(user);

      this.storage.set( TOKEN_KEY,user );

      return of(user);

    }
     
}
