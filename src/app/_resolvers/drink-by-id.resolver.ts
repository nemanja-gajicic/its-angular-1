import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ApiService } from "../_service/api.service";
import { Drinks } from "../_models/drink.model"

@Injectable({ providedIn: 'root' })
export class DrinkResolverById implements Resolve<Partial<{ drink: Drinks }>> {
  constructor(private service: ApiService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.searchCocktailById(route.paramMap.get('idDrink')!);
  }
}