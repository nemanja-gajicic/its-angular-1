import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
//Thanks for the example, but we don't have a backend that could managed these 
// requests and the CocktailDB API doesn't offer such options 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    login(jsonIn: any) {
      return this.httpClient.post('/login', jsonIn)
                  .pipe(
                    map( (response:any ) => {
                      localStorage['token'] = response.token;
                      return response.currentUser;
                    }
                  ))
    }

    isLogged(): boolean {
      return Boolean(localStorage['token']);
    }

    logout() {
      localStorage.clear();
      // redirect logion
    }
}