import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ApiService } from "../_service/api.service";
import { Drinks } from "../_models/drink.model";

@Injectable({ providedIn: 'root' })
export class DrinkResolverRandom implements Resolve<Partial<Drinks>> {
  constructor(private service: ApiService) {}

  resolve() {
    return this.service.searchRandomCocktail();
  }
}