import {Component, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {MovieService} from "../service/movie.service";
import {Movie} from "../model/movie";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  allMovies : Movie[] | undefined;
  requete='';
  moviesJson = new MovieService(this.http);
  getAllMovies(){
    this.moviesJson.getMovies()
                   .subscribe(data => {this.allMovies=data.results;});

  }
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.getAllMovies();

  }




}
