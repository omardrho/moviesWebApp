import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieItemComponent } from './movie-item/movie-item.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";
import { DetailsMovieComponent } from './details-movie/details-movie.component';

import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieItemComponent,
    DetailsMovieComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        Ng2SearchPipeModule,
        FormsModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
