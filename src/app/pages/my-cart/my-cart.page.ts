import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //imports Router
import { MyCartService } from 'src/app/my-cart.service';//imports MyCartService service
import { ModalController, AlertController} from '@ionic/angular'; //imports ModalController and AlertController
import { AngularFirestore } from '@angular/fire/firestore'; //imports Firestore database from Firebase
import { Observable } from 'rxjs'; //imports Observable
import 'firebase/firestore';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  cart = []; //cart variable declared

    selectedProducts = []; //selectedProducts variable declared

    total = 0; //total variable declared
    
    private products: Observable<any[]>; 


    constructor(private firestore: AngularFirestore, private router: Router, private MyCartService: MyCartService, private modalCtrl: ModalController, private alertController: AlertController) { }
    //Firestore, CartService, Router, ModalController and AlertController components declared in constructor class

  ngOnInit() {

    
    this.products = this.MyCartService.getProducts();
    this.cart = this.MyCartService.getCart();
  }

   //ngOnInit method declares getProducts and getCart methods and initialised from within the CartService

   addToCart(product) {
    this.MyCartService.addProduct(product);
}
//addToCart method declared and initialised from the addProduct method from within the CartService


remove(product) {
    this.MyCartService.removeItemFromCart(product);
}
//remove method declared and initialised from the removeItemFromCart method from within the CartService

Total(){
    return this.cart.reduce((a, b) => a + (a.count * b.price), 0 );
}
//getTotal method declared and the reduce function declares the accumulated result of the array which is the price multipled by the amount

empty(product) {
    this.MyCartService.emptyCart(product);
}
//remove method declared and initialised from the removeItemFromCart method from within the CartService

close(){
    this.modalCtrl.dismiss();
}
//close method declared and initialised from the modalController

async cartEmpty() {
    const alert = await this.alertController.create({
      header: 'Cart is now empty!',
      buttons: ['OK']
   });

   await alert.present();
   this.modalCtrl.dismiss();
}
}
