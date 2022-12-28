import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ApiService } from "../_service/api.service";

@Injectable({ providedIn: 'root' })
export class DrinkResolverRandom implements Resolve<Partial<Drinks>> {
  constructor(private service: ApiService) {}

  resolve() {
    return this.service.searchRandomCocktail();
  }
}