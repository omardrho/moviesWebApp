import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_TOKEN :any= "42f43a8605126f0ed54ab183c372e71c";
   url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN

  constructor(private http :HttpClient) {}

  getMovies(){
    return  this.http.get<any>(this.url)
  }
}
