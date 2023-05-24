import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMoviesComponent} from "./list-movies/list-movies.component";
import {DetailsMovieComponent} from "./details-movie/details-movie.component";


const routes: Routes = [
  {path: '', component: ListMoviesComponent},
  {path: 'details/:id', component: DetailsMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
