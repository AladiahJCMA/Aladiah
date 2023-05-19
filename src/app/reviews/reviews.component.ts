/* Angular imports */
import { Component } from '@angular/core';
/* App imports */
import data from '../../../games.json';
import { Game } from '../types';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews: Array<Game> = data.Games;
  
}
