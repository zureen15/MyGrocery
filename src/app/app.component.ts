import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  home: any;
  page: any;
  pages:any[]=[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
    ) 
    
    {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.home
      this.pages =[{
        pagename: "My Profile",
        icon: "person-circle-outline",
        url: "/my-profile"
      },  {
        pagename: "My Orders",
        icon: "bag-outline",
        url: "/my-orders"
      }, {
          pagename: "My Cart",
          icon: "cart-outline",
          url: "/my-cart"
      }, {
        pagename: "Payment",
        icon: "cash-outline",
        url: "/payment"
      }, {
        pagename: "Rewards and Coupons",
        icon: "heart-circle-outline",
        url: "/rewards-and-coupons"
      }, {
        pagename: "Feedback",
        icon: "star-outline",
        url : "/feedback"
      }, {
        pagename: "Chat Support",
        icon: "chatbubble-outline",
        url: "/chat-support"
      }, {
        pagename: "Info",
        icon: "information-circle-outline",
        url: "/info"
      }]
    });

  }
  Goto(page)
  {
    this.router.navigate([page.url]);
  }

}
