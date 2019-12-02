import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {FirstLastNameAndTotalOrders} from '../../models/firstLastNameAndTotalOrders';

@Component({
  selector: 'app-first-last-name-and-total-orders',
  templateUrl: './first-last-name-and-total-orders.component.html',
  styleUrls: ['./first-last-name-and-total-orders.component.scss']
})
export class FirstLastNameAndTotalOrdersComponent implements OnInit {

  namesAndTotalOrders: FirstLastNameAndTotalOrders[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.orderedMoreThan1BookDescendingQuantity()
        .subscribe(data =>  {
          this.namesAndTotalOrders = data;
        });
  }

}
