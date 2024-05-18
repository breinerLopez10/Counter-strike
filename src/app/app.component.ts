import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar esto
import { CommonModule } from '@angular/common';



interface Agent {
  id: string;
  name: string;
  description: string;
  rarity: {
    id: string;
    name: string;
    color: string;
  };
  collections: {
    id: string;
    name: string;
    image: string;
  }[];
  team: {
    id: string;
    name: string;
  };
  market_hash_name: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ HttpClientModule, CommonModule], // Asegúrate de importar esto
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'counter-analisis';
  agents: Agent[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    const appId = 730;  // App ID for CS: GO
const currency = 1; // USD
const url = `https://api.steamapis.com/market/apps?api_key={}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        this.agents = Object.values(response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
