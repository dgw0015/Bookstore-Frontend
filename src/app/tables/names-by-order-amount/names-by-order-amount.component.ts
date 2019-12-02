import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {NamesByOrderAmount} from '../../models/namesByOrderAmount';

@Component({
  selector: 'app-names-by-order-amount',
  templateUrl: './names-by-order-amount.component.html',
  styleUrls: ['./names-by-order-amount.component.scss']
})
export class NamesByOrderAmountComponent implements OnInit {

  names: NamesByOrderAmount[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCustomerThatOrderedAtLeastTwo().subscribe(data =>  {
      this.names = data;
    });
  }

}
