import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfileService, Profile } from 'src/app/profile.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
 

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

  constructor (private firestore: AngularFirestore, private ProfileService: ProfileService, private toastCtrl: ToastController) { 

  }

  ngOnInit() {

    this.profiles = this.ProfileService.getProfiles();
  }

  addProfile() {
    this.ProfileService.addProfile(this.profile).then(() => {
      this.showToast('Profile added');
    }, error => {
      console.log(error);
      });
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