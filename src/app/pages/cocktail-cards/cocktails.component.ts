import { Component, Input } from "@angular/core";
import { Drink } from "src/app/_models/drink.model";

@Component({
    selector: "cocktails",
    templateUrl: "./cocktails.component.html"
})

export class CocktailsComponent {
    @Input() cocktails : Drink[] = []; 
    @Input() cocktailNotFound : boolean = false;
}