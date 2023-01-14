import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Drink, Drinks } from "src/app/_models/drink.model";
import { Ingredient, Ingredients } from "src/app/_models/ingredient.model";

@Component({
  selector: "app-ingredient",
  templateUrl: "./ingredient.component.html",
})
export class IngredientComponent implements OnInit {
  

  constructor(private route: ActivatedRoute) {}

  drinks: Drink[] = [];
  ingredient: Partial<Ingredient> = {};

  ngOnInit() {
    this.route.data
      .subscribe((response: Partial<{ingredientContainedIn:Drinks, selected: Ingredients}>) => {
      // if there are drinks with this ingredient that arrive, save them 
      if (response.ingredientContainedIn?.drinks) this.drinks = 
        response.ingredientContainedIn?.drinks;
      // also save the ingredient details 
      if ( response.selected?.ingredients) this.ingredient = 
        response.selected?.ingredients[0]; 
    });
    window.scrollTo(0,0);
  }
}
