import { Component, OnInit } from '@angular/core';
import { recipeService } from '../recipe-service.service';
import { recipeSummary } from '../Model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipelist!:recipeSummary[]
  constructor(private rcpSvc:recipeService) { }


  ngOnInit(): void {
    this.rcpSvc.getAllRecipes().then(result => {this.recipelist=result})
  }




}
