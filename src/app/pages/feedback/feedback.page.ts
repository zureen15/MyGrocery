import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  isRated = false;

  changeRating() {
    this.isRated = !this.isRated;
  }


  constructor() { 
  }
 

  ngOnInit() {}

}