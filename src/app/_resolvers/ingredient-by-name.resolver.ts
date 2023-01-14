import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ApiService } from "../_service/api.service"
import { Ingredient } from "../_models/ingredient.model";

@Injectable({ providedIn: 'root' })
export class IngredientResolverByName implements Resolve<Partial<{drink:Ingredient}>> {
  constructor(private service: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.searchIngredientDetailsByName(route.paramMap.get('ingredient')!);
  }
}