// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { config } from 'rxjs';


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBcE2auqclQ0Go_xD11gUMz7xnYIEpxaew",
    authDomain: "mygrocery-4fd39.firebaseapp.com",
    databaseURL: "https://mygrocery-4fd39.firebaseio.com",
    projectId: "mygrocery-4fd39",
    storageBucket: "mygrocery-4fd39.appspot.com",
    messagingSenderId: "14016662603",
    appId: "1:14016662603:web:73f332f32f4b4086bb51ce",
    measurementId: "G-H8BR9W5PKW"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
