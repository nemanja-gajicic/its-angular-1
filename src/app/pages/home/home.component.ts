import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks:any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.searchCocktailByFirstLetter('a')
                  .subscribe( (response: any) => {
                    console.log(response);
                    this.drinks = response.drinks;
                  })
  }
}
