import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class SearchService {

  constructor() {
    this.searchResult = new Subject<Object>();
    this.movieDetails = new Subject<Object>();
    this.genres = new Subject<Object>();
  }

  searchResult: Subject<Object>;
  movieDetails: Subject<Object>;
  genres: Subject<Object>;
  readonly apiKey = '1c5abaaeaa13c66b570ad3042a0d51f4';
  isDetailsOpen = false;

  onSearch(criteria: String): void {
    const queryString = `https://api.themoviedb.org/3/search/multi?` +
                        `api_key=${this.apiKey}&language=en-US&` +
                        `query=${criteria}&page=1&include_adult=false`;

    fetch(queryString)
      .then(res => res.json())
      .then(res => {
        this.searchResult.next(res.results);
      });
  }

  getDetails(movieId: number): void {
    const queryString = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US`

    fetch(queryString)
      .then(res => res.json())
      .then(res => {
        this.movieDetails.next(res);
      });
  }

  getGenres(): void {
    const queryString = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`;

    fetch(queryString)
      .then(res => res.json())
      .then(res => {
        this.genres.next(res.genres);
      });
  }
}
