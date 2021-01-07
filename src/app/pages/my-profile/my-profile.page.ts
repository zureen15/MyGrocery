import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  profile = {
    name: '',
    phone: ''
  }

  logForm() {
    console.log(this.profile)
  }

  constructor () { 

  }

  ngOnInit() {

  }
  
  
}