import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; //imports Observable
import { Router } from '@angular/router'; //imports Router
import { ModalController } from '@ionic/angular'; //imports ModalController
import { MyCartService } from '../my-cart.service';
import { MyCartPage } from '../pages/my-cart/my-cart.page';
import { Products } from '../models/products';
import 'firebase/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  cart = []; //cart variable declared
  products: any; //products observable declared
  

  selectTabs: '0';

  slideOpts = {
    centeredSlide: true,
    slidesPerView: 3,
  };



  constructor(private firestore: AngularFirestore, private MyCartService: MyCartService, private router: Router, private modalCtrl: ModalController) 

  //Firestore, CartService, Router and ModalController imports declared in constructor class
  
  {
    this.products = this.firestore.collection<any>('products').valueChanges();
    }

    ngOnInit() 
      {
        this.products = this.MyCartService.getProducts();
        this.cart = this.MyCartService.getCart();
    } //ngOnInit method declares getProducts and getCart methods and initialised from within the CartService
    

    addToCart(product) {
        this.MyCartService.addProduct(product);
    } //addToCart method declared and initialised from the addProduct method from within the CartService

    async openCart() {
        let modal = await this.modalCtrl.create({
          component: MyCartPage,
          cssClass: 'cart-modal'
        });
        modal.present();
    } //openCart method declared and initialises cart modal from cart page when cart icon clicked

    remove(product) {
        this.MyCartService.removeItemFromCart(product);
    } //remove method declared and initialised from the removeItemFromCart method from within the CartService


}
