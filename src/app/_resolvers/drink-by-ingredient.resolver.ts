import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ApiService } from "../_service/api.service"

@Injectable({ providedIn: 'root' })
export class DrinkResolverByIngredient implements Resolve<Partial<Drinks>> {
  constructor(private service: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ) {
    return this.service.searchCocktailByIngredient(route.paramMap.get('ingredient')!);
  }
}