import { Component, OnInit } from '@angular/core';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private searchService: SearchService) { }

  searchKey: String;
  searchResult: Object;
  isDialogOpen = false;
  dialogData: Object;

  ngOnInit() {
    this.subscribeForSearchResult();
  }

  subscribeForSearchResult(): void {
    this.searchService.searchResult.subscribe(result => {
      this.searchResult = result;
      console.log(this.searchResult);
    });
  }

  checkInput(): void {
    this.searchService.isDetailsOpen = false;
    if (this.searchKey.length >= 3) {
      this.doSearch();
    }
  }

  doSearch(): void {
    this.searchService.doSearch(this.searchKey);
  }

  onOpenDetails(id: number): void {
    this.searchService.getDetails(id);
    this.searchService.isDetailsOpen = true;
  }

}
