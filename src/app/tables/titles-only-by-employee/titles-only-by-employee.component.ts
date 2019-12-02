import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {TitleOnlyByEmployee} from '../../models/titleOnlyByEmployee';

@Component({
  selector: 'app-titles-only-by-employee',
  templateUrl: './titles-only-by-employee.component.html',
  styleUrls: ['./titles-only-by-employee.component.scss']
})
export class TitlesOnlyByEmployeeComponent implements OnInit {

  books: TitleOnlyByEmployee[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBookTitleEmployee6Responsible().subscribe(data =>  {
      this.books = data;
    });
  }

}
