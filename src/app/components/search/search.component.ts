import { Component, OnInit } from '@angular/core';
import SearchService from '../../services/search.service';
import Utils from '../../utils/utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  searchKey: String;
  searchResult: Object;
  genres: any;
  isDialogOpen = false;
  dialogData: Object;

  ngOnInit() {
    this.subscribeForSearchResult();
    this.subscribeForGenres();
    this.searchService.getGenres();
  }

  subscribeForSearchResult(): void {
    this.searchService.searchResult.subscribe(result => {
      this.searchResult = result;
    });
  }

  subscribeForGenres(): void {
    this.searchService.genres.subscribe(result => {
      this.genres = result;
    });
  }

  checkInput(): void {
    this.searchService.isDetailsOpen = false;
    if (this.searchKey.length >= 3) {
      this.onSearch();
    }
  }

  onSearch(): void {
    this.searchService.onSearch(this.searchKey);
  }

  onOpenDetails(id: number): void {
    this.searchService.getDetails(id);
    this.searchService.isDetailsOpen = true;
  }

  getGenres(item: any): String {
    if (!item.genre_ids) {
      return 'no genres found';
    }
    const genreArray = [];
    item.genre_ids.forEach(id => {
      for (let i = 0; i < this.genres.length; i++) {
        if (this.genres[i].id === id) {
          genreArray.push(this.genres[i].name);
        }
      }
    });
    return Utils.createStringFromArray(genreArray);
  }
}
