import { Component, OnInit } from '@angular/core';
import {TitleOnly} from '../../models/titleOnly';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-title-only',
  templateUrl: './title-only.component.html',
  styleUrls: ['./title-only.component.scss']
})
export class TitleOnlyComponent implements OnInit {

  books: TitleOnly[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUniqueNamesOrderedByCustomerName().subscribe(data => {
      this.books = data;
    });
  }

}
