import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRate } from '@ionic-native/app-rate';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage  {

 
  constructor(public platform: Platform,private appRate: AppRate) { 
   
  }

 // Rate App Dialogue
 rateMe() {
  this.appRate.preferences = {
    usesUntilPrompt: 3,
    displayAppName: 'Your app name here',
    promptAgainForEachNewVersion: true,
    storeAppURL: {
     
      windows: 'io.ionic.starter'
    },
    customLocale: {
      title: 'Do you enjoy this App?',
      message: 'If you enjoy this App. would you mind talking a moment to rate it?',
      cancelButtonLabel: 'No, Thanks',
      laterButtonLabel: 'Remind me Later',
      rateButtonLabel: 'Rate it Now',
      yesButtonLabel: "Yes!",
      noButtonLabel: "Not Really",
      appRatePromptTitle: 'Do you like using my App?',
      feedbackPromptTitle: 'Mind giving us some feedback?',
    },
    callbacks : {
      onRateDialogShow: function(callback) {
        // show something
      },
      onButtonClicked : function (buttonIndex) {
        // show something
      }
    }
};  
this.appRate.promptForRating(true);
}
}

