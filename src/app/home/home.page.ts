import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; //imports Observable
import { Router } from '@angular/router'; //imports Router
import { ModalController } from '@ionic/angular'; //imports ModalController
import { MyCartService } from '../my-cart.service';
import { MyCartPage } from '../pages/my-cart/my-cart.page';
import { products } from '../models/products';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  cart = []; //cart variable declared

  private products: Observable<any[]>; //products observable declared

  constructor(private firestore: AngularFirestore, private MyCartService: MyCartService, private router: Router, private modalCtrl: ModalController) 

  //Firestore, CartService, Router and ModalController imports declared in constructor class
  
  {

    this.products = this.firestore.collection<any>('products').valueChanges(); //valueChanges method returns latest values from products collection from within the Firestore database
    }

    ngOnInit() {
        this.products = this.MyCartService.getProducts();
        this.cart = this.MyCartService.getCart();
    } //ngOnInit method declares getProducts and getCart methods and initialised from within the CartService

    addToCart(products) {
        this.MyCartService.addProduct(products);
    } //addToCart method declared and initialised from the addProduct method from within the CartService

    async openCart() {
        let modal = await this.modalCtrl.create({
          component: MyCartPage,
          cssClass: 'cart-modal'
        });
        modal.present();
    } //openCart method declared and initialises cart modal from cart page when cart icon clicked

    remove(products) {
        this.MyCartService.removeItemFromCart(products);
    } //remove method declared and initialised from the removeItemFromCart method from within the CartService


}
