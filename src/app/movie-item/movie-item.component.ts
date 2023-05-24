import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() Movie:any;
  @Input() MovieItemComponent:any;
  @Input() Title!: string | undefined;
  @Input() Image!: string | undefined;
  @Input() Id!: number | undefined;
  @Input() Date!: string | undefined;


}
