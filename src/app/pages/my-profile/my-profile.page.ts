import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from 'src/app/profile.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import 'firebase/firestore';
 

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  profile: Profile = {
    name: '',
    phone: ''
  };

  private profiles: Observable<Profile[]>;

  constructor (private firestore: AngularFirestore, private router: Router, private ProfileService: ProfileService, private toastCtrl: ToastController) { 

  }

  ngOnInit() {

    this.profiles = this.ProfileService.getProfiles();
  }

  ionViewWillEnter() {
    if (this.profile.id) {
      this.ProfileService.getProfile(this.profile.id).subscribe(profile => {
        this.profile = profile;
      });
    }
  }

  updateProfile() {
    this.ProfileService.updateProfile(this.profile).then(() => {
      this.showToast('Profile updated');
    },  error => {
      console.log(error);
      });
  }
  
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}