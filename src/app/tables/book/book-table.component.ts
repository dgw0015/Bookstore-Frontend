import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  books: Book[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllBooks().subscribe(data => {
      this.books = data
    });
  }

}
