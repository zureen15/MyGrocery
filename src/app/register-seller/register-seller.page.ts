import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { AngularFireAuth } from '@angular/fire/auth';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.page.html',
  styleUrls: ['./register-seller.page.scss'],
})
export class RegisterSellerPage implements OnInit {

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
      this.router.navigate(['/home-seller']);
    }  else {
      alert ('registration failed!');
    }
  }
   

}

