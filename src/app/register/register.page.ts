import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { AngularFireAuth } from '@angular/fire/auth';

import { ToastController } from '@ionic/angular';


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

  constructor(private router: Router, private toastController: ToastController,
    public ngFireAuth: AngularFireAuth) {}

  ngOnInit() {
  }

  async register () {
    
    const user = await this.ngFireAuth.createUserWithEmailAndPassword( this.user.email, this.user.password);
    console.log(user);
    await user.user.sendEmailVerification();
    this.presentToast('Verification email sent',  'bottom', 1000); // this is toastController
    this.router.navigate(['/login']);

      
 
    
  }

    async presentToast(message, position, duration) {
    const toast = await this.toastController.create({
      message,
      duration,
      position
    });
    toast.present();
  }

   

}

