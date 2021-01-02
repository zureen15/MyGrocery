import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.page.html',
  styleUrls: ['./home-seller.page.scss'],
})
export class HomeSellerPage implements OnInit {
 
  products: Observable<any[]>; //products observable declared
  
  constructor(private firestore: AngularFirestore)
  {
    this.products = this.firestore.collection<any>('products').valueChanges(); //valueChanges method returns latest values from products collection from within the Firestore database    }
  }

  ngOnInit() { 

    this.showChart();

   }

   showChart() {
    var ctx = (<any>document.getElementById('grocery-chart'));
    var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["September", "October", "November", "December"],
        datasets: [{
            label: "Monthly Sales Record",
           
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            data: [30, 49, 55, 22],
            borderWidth: 1
        }]
      }
    });
  }

  getProducts() {
    return this.products;
} //getProducts method declared and returns products when initialised

}