import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  user = {
      
    email: '',
   password: ''
}   
    error : ''; 

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController

  ) { }

  ngOnInit() {

    }
}
