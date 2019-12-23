import { Component, OnInit } from '@angular/core';
import SearchService from 'src/app/services/search.service';
import Utils from '../../utils/utils';

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
      this.genresString = Utils.createStringFromArray(this.dialogData.genres, this.gernreProp);
      this.prodCountriesString = Utils.createStringFromArray(this.dialogData.production_countries, this.countryProp);
    });
  }

  closeDetais(): void {
    this.searchService.isDetailsOpen = false;
  }

}
