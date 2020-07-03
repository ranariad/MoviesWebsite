import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( public _HttpClient:HttpClient) { }

  getTrendingMovies():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=628a9f8127b1ff5fd064dbe775db4b33')
  }

  getTrendingTv():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=628a9f8127b1ff5fd064dbe775db4b33')
  }

   getMovieDetails(id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=628a9f8127b1ff5fd064dbe775db4b33&language=en-US`)
  }
}
