import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRecipe } from 'src/app/interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private urlJson = 'assets/json/recipes.json';
  constructor(private readonly _http: HttpClient) {}

  public getRecipes(): Observable<IRecipe[]> {
    return this._http.get<IRecipe[]>(this.urlJson);
  }
}
