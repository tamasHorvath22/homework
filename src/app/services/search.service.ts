import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class SearchService {

  constructor() {
    this.searchResult = new Subject<Object>();
  }

  searchResult: Subject<Object>;

  doSearch(criteria) {
    const queryString = `https://api.themoviedb.org/3/search/multi?` +
                        `api_key=1c5abaaeaa13c66b570ad3042a0d51f4&language=en-US&` +
                        `query=${criteria}&page=1&include_adult=false`;

    fetch(queryString)
      .then(res => res.json())
      .then(res => {
        this.searchResult.next(res.results);
      });
  }
}
