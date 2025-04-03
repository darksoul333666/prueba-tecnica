import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { IRecipe } from '../interfaces/recipe';
import { RecipesService } from '../services/recipes/recipes.service';
import { RecipeCardComponent } from "../components/recipe-card/recipe-card/recipe-card.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, RecipeCardComponent, HttpClientModule, CommonModule, FormsModule],
})
export class HomePage {
  public recipes: BehaviorSubject<IRecipe[]> = new BehaviorSubject<IRecipe[]>([]);
  public search: string = '';
  constructor(
    private readonly _recipesService: RecipesService
  ) {}

  public ngOnInit(): void {
    this.getAllRecipes();
  }

  public getAllRecipes(): void {
    this._recipesService.getRecipes().subscribe(
      recipes => {
        console.log("recipes", recipes);
        this.recipes.next(recipes)
      }
    )
  }

  public getRecipeByTitle(): void {
  if(this.search === '') {
    this.getAllRecipes();
  } else {
    let recipesFiltered = this.recipes.value.filter(
      recipe => {
        return recipe.title.toLocaleLowerCase().includes(this.search.toLowerCase())
      }
     )
     console.log("recipesFiltered", recipesFiltered);
     this.recipes.next(recipesFiltered)
  }
  }

}
