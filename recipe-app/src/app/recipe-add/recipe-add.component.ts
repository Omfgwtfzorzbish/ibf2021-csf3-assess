import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators,FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { single } from 'rxjs';
import { singleRecipe } from '../Model';
import { recipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  addRecipe!:singleRecipe
  ingredients!:string[]
  i:number=1
  singleRecipe!:singleRecipe


  form!:FormGroup
  arr!:FormArray
  valid!:boolean
  constructor(private fb:FormBuilder, private router:Router, private rcpSvc:recipeService) { }

  ngOnInit(): void {
    this.arr=this.fb.array([  ])
    this.form = this.fb.group({
      title:this.fb.control('',[Validators.required,Validators.minLength(3)]),
      image:this.fb.control(''),
      instructions:this.fb.control('',[Validators.required,Validators.minLength(3)]),
      recipeArray:this.arr})

      this.valid=this.form.valid
  }

  get recipeArray():FormArray{
    return this.form.controls["arr"] as FormArray;
  }

  addIngredient(){
    const recipeBlock = this.fb.group({
      ingredient: this.fb.control('')
    })
      this.arr.push(recipeBlock)
  }
  deleteIngredient(i:number){
    this.arr.removeAt(i)
  }

  processForm(){
//console.info('>>> form: ', this.form.value)
    const data = this.form.value
    //data.ingredients = data.ingredients.map(v => !!v)
    console.info('>>> data: ', data)

    let changeIngName:string[]=[]


     for(let i:number=0; i<data.recipeArray.length; i++){

       changeIngName.push(data.recipeArray[i].ingredient)
     }
     this.singleRecipe={title:data.title, image:data.image,instructions:data.instructions,ingredients:changeIngName,id:"id"}

    this.rcpSvc.addSingleRecipe(this.singleRecipe)
      .then(result=>{
        this.form.reset();
        console.info(result)
      })
        .catch(error => {console.info(error)})
    this.router.navigate(['/'])
  }
}
