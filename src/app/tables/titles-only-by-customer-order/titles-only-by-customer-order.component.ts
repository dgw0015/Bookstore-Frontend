import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {TitleOnlyByCustomerOrder} from '../../models/titleOnlyByCustomerOrder';

@Component({
  selector: 'app-titles-only-by-customer-order',
  templateUrl: './titles-only-by-customer-order.component.html',
  styleUrls: ['./titles-only-by-customer-order.component.scss']
})
export class TitlesOnlyByCustomerOrderComponent implements OnInit {

  books: TitleOnlyByCustomerOrder[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.booksThatCustomer1And4BothOrdered().subscribe(data =>  {
      this.books = data;
    });
  }

}
