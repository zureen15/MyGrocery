import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { Profile } from '../../models/profile';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  profile = { } as Profile;

  constructor(public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  createProfile() {
    this.ngFireAuth.authState.subscribe(auth => {
      
    })
  }

}
