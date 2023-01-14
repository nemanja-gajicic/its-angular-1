import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientAndMeasure } from 'src/app/_models/ingredient.model';
import { Drink, Drinks } from 'src/app/_models/drink.model';

@Component({
    selector: 'app-drink',
    templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    ingredientsList: IngredientAndMeasure[] = [];
    drink: Drink | any

    ngOnInit(): void {
        this.route.data
            .subscribe((response: Partial<{ drink: Drinks }>) => {
                this.drink = response.drink?.drinks![0];
                this.createIngredientMeasurePairs();
            });
    }

    /**
     * Because the API returns ingredients and their quantities as disassociated 
     * key value pairs, I need to associate them with one another 
     */
    createIngredientMeasurePairs() : void {
        for (const propertyName in this.drink) {
            if (propertyName.includes('strIngredient') && this.drink[propertyName]) {
                this.ingredientsList.push(
                    { 
                      name : this.drink[propertyName], 
                      measure: this.drink['strMeasure' + propertyName.slice(-1)]
                    } 
                )
            }
        }
    }

    replaceSpaceWithUnderscore = (word: string) => 
    { return word.replace(/\s/g, '_').toLowerCase() }
}



