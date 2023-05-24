import {Component, Input} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../model/movie";
import {MovieService} from "../service/movie.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent {
  Movies : Movie[] | undefined;

  idMovie:number = 0;

  private routeSub: Subscription = new Subscription();

  apiJson = new MovieService(this.http);
  getAllMovies=()=>{

    this.apiJson.getMovies().subscribe(data => {
      this.Movies=data.results;
      console.log(this.Movies);
    });

  }
  constructor(private http: HttpClient,private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.getAllMovies();
    this.idMovie= this.route.snapshot.params['id'];
  }

}
