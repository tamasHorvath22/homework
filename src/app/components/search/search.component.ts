import { Component, OnInit } from '@angular/core';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  searchKey: String;
  searchResult: Object;

  ngOnInit() {
    this.subscribeForSearchResult();
  }

  subscribeForSearchResult() {
    this.searchService.searchResult.subscribe(result => {
      this.searchResult = result;
      console.log(this.searchResult);
    });
  }

  checkInput() {
    if (this.searchKey.length >= 3) {
      this.doSearch();
    }
  }

  doSearch() {
    this.searchService.doSearch(this.searchKey);
  }

}
