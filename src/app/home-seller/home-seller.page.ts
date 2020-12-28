import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { products } from '../models/products';
import 'firebase/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.page.html',
  styleUrls: ['./home-seller.page.scss'],
})
export class HomeSellerPage implements OnInit {

  selectTabs: '0';


  
  private products: Observable<any[]>; //products observable declared
 
  
  constructor(private firestore: AngularFirestore)
  {
    this.products = this.firestore.collection<any>('products').valueChanges(); //valueChanges method returns latest values from products collection from within the Firestore database    }

   }

  ngOnInit() { 
    
   }

  getProducts() {
    return this.products;
} //getProducts method declared and returns products when initialised




    
}