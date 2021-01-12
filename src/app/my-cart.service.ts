import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Products } from "./models/products";
import { BehaviorSubject, Observable } from "rxjs"; //imports Observable
import "firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class MyCartService {
  private products: Observable<any[]>; //products observable declared
  private cart: Products[] = []; //cart variable declared
  private cartItemCount = new BehaviorSubject(0);

  constructor(
    private firestore: AngularFirestore //Firestore import declared in constructor class
  ) {
    this.products = this.firestore.collection<any>("products").valueChanges(); //valueChanges method returns latest values from products collection from within the Firestore database    }
  }

  getProducts() {
    return this.products;
  } //getProducts method declared and returns products when initialised

  getCart() {
    return this.cart;
  } //getCart method declared and returns products when initialised

  getCartItemCount() {
    return this.getCartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  } //addProduct method adds product to cart when cart when initialised

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeItemFromCart(product) {
    let index = this.cart.indexOf(product);

    if (index > -1) {
      this.cart.splice(index, 1);
    }
  } //removeItemFromCart method removes 1 item from cart when initialised

  emptyCart(product) {
    let index = this.cart.indexOf(product);

    if (index > -1) {
      this.cart.splice(product);
    }
  } //emptyCart method removes all items from cart when initialsied
} //end of MyCartService class
