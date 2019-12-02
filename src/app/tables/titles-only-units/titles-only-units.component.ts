import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {TitleOnlyByUnits} from '../../models/titleOnlyByUnits';

@Component({
  selector: 'app-titles-only-units',
  templateUrl: './titles-only-units.component.html',
  styleUrls: ['./titles-only-units.component.scss']
})
export class TitlesOnlyUnitsComponent implements OnInit {

  books: TitleOnlyByUnits[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBooksWithMoreThan10Units().subscribe(data =>  {
      this.books = data;
    });
  }

}
