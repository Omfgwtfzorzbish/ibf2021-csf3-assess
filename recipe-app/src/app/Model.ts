

export interface recipeSummary{
  title:string
  id:string
}

export interface singleRecipe extends recipeSummary{
  image:string
  ingredients:string[]
  instructions:string

}
