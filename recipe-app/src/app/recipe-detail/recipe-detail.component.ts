import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { singleRecipe } from '../Model';
import { recipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id:string=''
  singleRecipe!:singleRecipe
  errormessage=''
  constructor(private route:ActivatedRoute, private rcpSvc:recipeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params[':recipeId']

    this.rcpSvc.getSingleRecipe(this.id)
      .then(detail => {this.singleRecipe=detail
        console.log(detail)
      }).catch(error=> this.errormessage = error)
  }

}
