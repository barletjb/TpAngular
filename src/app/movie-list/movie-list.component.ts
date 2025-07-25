import {Component, OnInit} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {StarRatingComponent} from '../components/star-rating/star-rating.component';
import {MovieService} from '../services/movie.service';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'app-movie-list',
  imports: [
    NgStyle,
    StarRatingComponent,
    TranslatePipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  movies: any[] = [];


  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: (json) => {
        console.log(json);
        this.movies = json.data;
      },
      error: (error) => {
      }
    })
  }

  /**
   * Sera appelée via le clique d'un bouton
   */
  callApi() {
    this.movieService.getMovies().subscribe({
      next: (responseJson) => {
        console.log(responseJson);

        // Je vais dans tout le Json utiliser uniquement l'attribut data => la liste des filmes
        //rappel le Json actuelle => code, message , data (array)
        this.movies = responseJson.data;
      },
      error: (error) => {
      }
    })

  }
}
