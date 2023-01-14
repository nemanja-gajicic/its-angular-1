import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Drink, Drinks } from "src/app/_models/drink.model";

@Component({
  selector: "app-drinks",
  templateUrl: "./drinks.component.html",
})
export class DrinksComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.letterToSearch = res.get("letter") || this.letterToSearch;
    });

    // When the component gets initialised I need to deal with the data from the 
    // DrinkResolverByLetter 
    this.route.data.subscribe((response: Partial<{ letter: Drinks; random: Drinks }>) => {
      // setting the 'drinks' field to the result of the response or to nothing 
      response.letter?.drinks ? 
      (this.drinks = response.letter?.drinks) : (this.drinks.length = 0);
     // sort the drinks array according to the current locale 
      this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
      // if there's nothing in the response for that letter , set the error flag 
      !response.letter?.drinks?.length ? 
      (this.errorNotFound = true) : (this.errorNotFound = false);
      // if there was an answer, set the random drink field 
      if (response.random?.drinks) this.random = response.random?.drinks;
    });
  }

  letterToSearch = "A";
  drinks: Drink[] = [];
  random: Drink[] = [];
  alphabet = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase().split("");
  errorNotFound = false;
}
