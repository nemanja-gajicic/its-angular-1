import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// COMPONENT IMPORTS
import { DrinkComponent } from "./pages/drink/drink.component";
import { DrinksComponent } from "./pages/drinks/drinks.component";
import { HomeComponent } from "./pages/home/home.component";
import { IngredientComponent } from "./pages/ingredient/ingredient.component";
import { LoginComponent } from "./pages/login/login.component";
import { SearchComponent } from "./pages/search/search.component";
// RESOLVER IMPORTS
import { DrinkResolverById } from "./_resolvers/drink-by-id.resolver";
import { DrinkResolverByIngredient } from "./_resolvers/drink-by-ingredient.resolver";
import { DrinkResolverByLetter } from "./_resolvers/drink-by-letter.resolver";
import { DrinkResolverRandom } from "./_resolvers/drink-random.resolver";
import { IngredientResolverByName } from './_resolvers/ingredient-by-name.resolver';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "drinks", redirectTo: "/drinks/A", pathMatch: "full" },
  {
    path: "drinks/:letter",
    component: DrinksComponent,
    resolve: { letter: DrinkResolverByLetter, random: DrinkResolverRandom },
  },
  { path: "search", component: SearchComponent },
  { path: "drink/random", component: DrinkComponent, resolve: { drink: DrinkResolverRandom } },
  { path: "drink/:idDrink", component: DrinkComponent, resolve: { drink: DrinkResolverById } },
  {
    path: "ingredient/:ingredient",
    component: IngredientComponent,
    resolve: { ingredientContainedIn: DrinkResolverByIngredient, selected: IngredientResolverByName },
  },
  { path: "ingredient", redirectTo: "search", pathMatch: "full" },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }