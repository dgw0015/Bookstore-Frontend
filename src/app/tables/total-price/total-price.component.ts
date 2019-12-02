import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {TotalPrice} from '../../models/totalPrice';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss']
})
export class TotalPriceComponent implements OnInit {
  price: number;
  totalPrice: TotalPrice;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTotalSpentByCustomerName().subscribe(data =>  {
      this.price = data;
    });
    this.totalPrice.setTotalPrice(this.price);
  }

}
