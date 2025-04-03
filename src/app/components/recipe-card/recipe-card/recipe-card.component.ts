import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/recipe';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule
  ]
})
export class RecipeCardComponent  implements OnInit {
  @Input() recipe: IRecipe | undefined;
  constructor() { }

  ngOnInit() {}

  public seeDetails(id: number): void {
    if(!id) return;
    console.log("ID selected:", id);
  }
}
