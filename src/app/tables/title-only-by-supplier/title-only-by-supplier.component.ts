import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {TitleOnlyBySupplier} from '../../models/titleOnlyBySupplier';

@Component({
  selector: 'app-title-only-by-supplier',
  templateUrl: './title-only-by-supplier.component.html',
  styleUrls: ['./title-only-by-supplier.component.scss']
})
export class TitleOnlyBySupplierComponent implements OnInit {

  books: TitleOnlyBySupplier[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.bookTitlesFromSupplier2().subscribe(data =>  {
      this.books = data;
    });

  }

}
