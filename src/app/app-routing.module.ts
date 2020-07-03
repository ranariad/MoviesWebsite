import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailsComponent} from './movie-details/movie-details.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'moviedetails/:id' , component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
