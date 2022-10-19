import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks:any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .subscribe( (response: any) => {
          this.drinks = response.drinks;
          
        })

  }
}
