import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {TitleAndQuantity} from '../../models/titleAndQuantity';

@Component({
  selector: 'app-title-and-quantity',
  templateUrl: './title-and-quantity.component.html',
  styleUrls: ['./title-and-quantity.component.scss']
})
export class TitleAndQuantityComponent implements OnInit {

  titlesAndQuantities: TitleAndQuantity[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllBooksOrderedAndQuantitiesAscending()
        .subscribe(data =>  {
          this.titlesAndQuantities = data;
        });
  }

}
