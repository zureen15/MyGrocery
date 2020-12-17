import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    
    email: '',
   password: ''
   

  }

  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth) {}

  ngOnInit() {
  }

  async register () {
    
    const user = await this.ngFireAuth.createUserWithEmailAndPassword( this.user.email, this.user.password);
    console.log(user);
 
    if (user.user.email) {
      alert('registration succesful!');
      this.router.navigate(['/home']);
    }  else {
      alert ('registration failed!');
    }
  }
   

}

