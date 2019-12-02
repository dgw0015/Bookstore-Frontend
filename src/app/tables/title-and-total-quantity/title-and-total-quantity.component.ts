import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {TitleAndTotalQuantity} from '../../models/titleAndTotalQuantity';

@Component({
  selector: 'app-title-and-total-quantity',
  templateUrl: './title-and-total-quantity.component.html',
  styleUrls: ['./title-and-total-quantity.component.scss']
})
export class TitleAndTotalQuantityComponent implements OnInit {

  titleAndQuantities: TitleAndTotalQuantity[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.openOrdersAfterAugust4().subscribe(data =>  {
      this.titleAndQuantities = data;
    });
  }

}
