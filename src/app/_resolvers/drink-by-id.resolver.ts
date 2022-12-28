import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Drink } from "../_models/drink.model";
import { ApiService } from "../_service/api.service";

@Injectable({ providedIn: 'root' })
export class DrinkResolverById implements Resolve<Partial<{drink:DrinkApi}>> {
  constructor(private service: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ) {
    return this.service.searchCocktailById(route.paramMap.get('idDrink')!);
  }
}