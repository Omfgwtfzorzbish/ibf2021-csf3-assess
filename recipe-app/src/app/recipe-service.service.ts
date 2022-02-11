import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { lastValueFrom } from "rxjs";
import { singleRecipe } from "./Model";

const URL_GET_RECIPE_JSON = "/api/getrecipes"
const URL_POST_SINGLE_RECIPE= "/api/addrecipe"

@Injectable()
export class recipeService{

constructor(private http:HttpClient){}

  getAllRecipes():Promise<any>{
    return lastValueFrom(this.http.get<string>(URL_GET_RECIPE_JSON))
  }

  getSingleRecipe(id:string):Promise<any>{
    return lastValueFrom(
      this.http.get<any>(`/api/recipe/${id}`)
    )
  }

  addSingleRecipe(singleRecipe:singleRecipe):Promise<any>{
    return lastValueFrom(this.http.post<singleRecipe>(URL_POST_SINGLE_RECIPE,singleRecipe))
  }

}
