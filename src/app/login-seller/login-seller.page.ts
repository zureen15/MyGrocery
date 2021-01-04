import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.page.html',
  styleUrls: ['./login-seller.page.scss'],
})
export class LoginSellerPage implements OnInit {

  user = {
    email: '',
   password: ''
}

  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth, private faio : FingerprintAIO) { }

  ngOnInit() {
  }
    async login () {
      const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
      console.log(user);
  
      if (user.user.email) {
        this.router.navigate(['/home-seller']);
      } else {
        alert ('login failed!');
      }
  }

  logIn() {
    this.faio.show({
     cancelButtonTitle: 'Cancel',
     title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
     subtitle: 'Coolest Plugin ever',// (Android Only) | optional | Default: null
     description: 'Please authenticate', // optional | Default: null
     fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
                                        // When disableBackup is true defaults to "Cancel"
     disableBackup:true,  // optional | default: false
   })
   .then((result: any) =>{ console.log(result)
       alert("Successfully Authenticated!")
       this.router.navigate(['/home-seller']);
   })

   .catch((error: any) =>{ console.log(error)
        alert ("Match not found!")

       });

    }

} 