import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  drink:any = {};

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;
    this.httpClient
        .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        .subscribe( (response: any) => {
          this.drink = response.drinks[0];
        
        })

  }
}
