import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../models/api-response';
import {Movie} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getMovies() : Observable<ApiResponse<Movie[]>> {
    return  this.http.get<ApiResponse<Movie[]>>("http://localhost:3000/movies");
  }

}
