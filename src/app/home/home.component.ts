
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';

import { NavbarComponent } from '../navbar/navbar.component';





interface MarketItem {
  name: string;
  price: number;
  // Agrega otras propiedades según lo que necesites
}

interface ActivityItem {
  type: string;
  quantity: string;
  price: number;
  time: number;
  avatar_buyer: string | null;
  avatar_medium_buyer: string | null;
  persona_buyer: string | null;
  avatar_seller: string | null;
  avatar_medium_seller: string | null;
  persona_seller: string | null;
  price_str: string;
}



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {

  title = 'counter-analisis';
  marketItems: MarketItem[] = [];
  activityData: ActivityItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
    this.getActivityData();
  }

  getData() {
    const url = `http://localhost:8000/item_listings.php`;
    this.http.get<any>(url).subscribe(
      (response) => {
       
        if (response && response.results) {
       
          this.marketItems = response.results.map((item: any) => ({
            name: item.name,
            price: item.sale_price
          }));
        } else {
          console.error('Invalid response format:', response);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  

  getActivityData() {
    const url = `http://localhost:8000/steam-market-api-v2/examples/item_orders_activity.php`;
    this.http.get<any>(url).subscribe(
      (response) => {
        // Parsea la respuesta para obtener los datos relevantes de la actividad
        this.activityData = response.response.activity;
      },
      (error) => {
        console.error('Error fetching activity data:', error);
      }
    );
  }

}
