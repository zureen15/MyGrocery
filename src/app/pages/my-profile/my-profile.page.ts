import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Profile } from '../../models/profile';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  profile = { } as Profile;

  constructor(public ngFireAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  createProfile() {
    this.ngFireAuth.authState.subscribe(auth => {
      this.firestore.collection('profile').doc('profile/$auth.uid').set(this.profile)
    })
  }

}
