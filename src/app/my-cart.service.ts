import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; //imports Observable
import firebase from 'firebase/app';
import 'firebase/firestore'


@Injectable({
  providedIn: 'root'
})
export class MyCartService {

  private products: Observable<any[]>; //products observable declared


    private cart = []; //cart variable declared


    constructor(private firestore: AngularFirestore, ) //Firestore import declared in constructor class
    
    {

        this.products = this.firestore.collection<any>('products').valueChanges(); //valueChanges method returns latest values from products collection from within the Firestore database    }
    }
    getProducts() {
        return this.products;
    } //getProducts method declared and returns products when initialised


    getCart() {
        return this.cart;
    } //getCart method declared and returns products when initialised

    addProduct(products) {
        this.cart.push(products);
    } //addProduct method adds product to cart when cart when initialised

    removeItemFromCart(products) {
        let index = this.cart.indexOf(products);

        if (index > -1) {
            this.cart.splice(index, 1);
        }
    } //removeItemFromCart method removes 1 item from cart when initialised

    emptyCart(products) {
        let index = this.cart.indexOf(products);

        if (index > -1) {
            this.cart.splice(products);
        }
    } //emptyCart method removes all items from cart when initialsied

} //end of MyCartService class
