import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {Order} from '../../models/order';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  orders: Order[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllOrders().subscribe(data =>  {
      this.orders = data;
    });
  }

}
