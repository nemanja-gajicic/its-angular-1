import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ApiService } from "../_service/api.service";
import { Drinks } from "../_models/drink.model";

@Injectable({ providedIn: 'root' })
export class DrinkResolverByLetter implements Resolve<Partial<Drinks>> {
  constructor(private service: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.searchCocktailByFirstLetter(route.paramMap.get('letter')!);
  }
}