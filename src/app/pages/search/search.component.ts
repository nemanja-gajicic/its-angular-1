import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/_service/api.service";
import { Drink, Drinks } from "../../_models/drink.model"
interface IngredientList {
  strIngredient1: string;
}
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent implements OnInit {
  constructor(private service: ApiService) {}

  drinks: Drink[] = [];
  ingredientList: string[] = [];
  isSearched : boolean = false;

  jsonIn = {
    name: "",
    ingredient: "",
  };

  ngOnInit(): void {
    // When the component is initialised I need to get all the ingredients
    this.service.searchIngredientsList().subscribe
    ((response: Partial<{ drinks: IngredientList[] }>) => {
      if (response.drinks) this.ingredientList = 
      response.drinks.map((ingredient) => ingredient.strIngredient1);
    });
  }

  searchCocktailByName() : void {
    this.jsonIn.ingredient = "";
    this.isSearched = true;
    this.service.searchCocktailByName(this.jsonIn.name).subscribe
    ((response: Partial<Drinks>) => {
      if (response.drinks) {
        this.drinks = response.drinks;
        return;
      }
      this.drinks.length = 0;
    });
  };

  searchCocktailByIngredient() : void {
    this.jsonIn.name = "";
    this.service.searchCocktailByIngredient(this.jsonIn.ingredient).subscribe
    ((response: Partial<Drinks>) => {
      if (response.drinks) {
        this.drinks = response.drinks;
        return;
      }
      this.drinks.length = 0;
    });
  };
}
