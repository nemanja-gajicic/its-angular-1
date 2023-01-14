// ANGULAR IMPORTS 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// COMPONENT IMPORTS
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DrinkComponent } from './pages/drink/drink.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { CocktailsComponent } from './pages/cocktail-cards/cocktails.component';
// UTILITY IMPORTS 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DrinkComponent,
    SearchComponent,
    IngredientComponent,
    DrinksComponent,
    CocktailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    BlockUIHttpModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
