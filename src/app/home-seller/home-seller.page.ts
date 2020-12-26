import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; //imports Observable
import { products } from '../models/products';
import 'firebase/firestore';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.page.html',
  styleUrls: ['./home-seller.page.scss'],
})
export class HomeSellerPage implements OnInit {

  private products: Observable<any[]>;

  selectTabs: '0';

  constructor(private firestore: AngularFirestore)
  {
    this.products = this.firestore.collection<any>('products').valueChanges();
   }

  ngOnInit() {
  }

  getProduct(): Observable<any[]> {
    return this.firestore.collection<any>('products').valueChanges();
  }
}
