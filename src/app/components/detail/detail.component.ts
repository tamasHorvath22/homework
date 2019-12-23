import { Component, OnInit } from '@angular/core';
import SearchService from 'src/app/services/search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dialogData: any;
  genresString: String;
  prodCountriesString: String;
  readonly gernreProp = 'name';
  readonly countryProp = 'name';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.movieDetails.subscribe(res => {
      this.dialogData = res;
      this.genresString = this.createStringFromArray(this.dialogData.genres, this.gernreProp);
      this.prodCountriesString = this.createStringFromArray(this.dialogData.production_countries, this.countryProp);
    });
  }

  createStringFromArray(array: Array<Object>, property: any): String {
    let resultString = '';
    for (let i = 0; i < array.length; i++) {
      resultString += array[i][property];
      if (i < array.length - 1) {
        resultString += ', ';
      }
    }
    return resultString;
  }

  closeDetais(): void {
    this.searchService.isDetailsOpen = false;
  }

}