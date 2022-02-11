import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RouterModule, Routes } from '@angular/router';
import { recipeService } from './recipe-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes:Routes=[
  {path: '', component: RecipeListComponent},
  {path: 'recipe/:recipeId', component: RecipeDetailComponent},
  {path: 'add', component: RecipeAddComponent},
  {path: '**', redirectTo: ''}
]
@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,RouterModule.forRoot(appRoutes),
    FormsModule,ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
