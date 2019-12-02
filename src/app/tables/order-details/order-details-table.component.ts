import { Component, OnInit } from '@angular/core';
import {OrderDetails} from '../../models/orderDetails';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-order-details-table',
  templateUrl: './order-details-table.component.html',
  styleUrls: ['./order-details-table.component.scss']
})
export class OrderDetailsTableComponent implements OnInit {

  orderDetails: OrderDetails[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllOrderDetails().subscribe(data =>  {
      this.orderDetails = data;
    });
  }

}
