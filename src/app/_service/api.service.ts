import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  searchCocktailByFirstLetter(firstLetter: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter)
  }

  searchCocktailById(id: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
  }

  searchCocktailByName(name: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
  }

  searchCocktailByIngredient(ingredient: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
  }

  searchRandomCocktail() {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }

  searchIngredientsList() {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
  }

  searchIngredientDetailsByName(ingredient: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient)
  }

}
