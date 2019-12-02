import { Component, OnInit } from '@angular/core';
import {TitleAndPrice} from '../../models/titleAndPrice';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-title-and-price',
  templateUrl: './title-and-price.component.html',
  styleUrls: ['./title-and-price.component.scss']
})
export class TitleAndPriceComponent implements OnInit {

  titleAndPrices: TitleAndPrice[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMostExpensiveBookBySupplier().subscribe(data => {
      this.titleAndPrices = data;
    });
  }

}
