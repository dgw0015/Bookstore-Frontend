import { Component, OnInit } from '@angular/core';
import {FirstLastNameTotalPurchases} from '../../models/firstLastNameTotalPurchases';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-first-last-name-and-total-purchases',
  templateUrl: './first-last-name-and-total-purchases.component.html',
  styleUrls: ['./first-last-name-and-total-purchases.component.scss']
})
export class FirstLastNameAndTotalPurchasesComponent implements OnInit {

  namesAndTotalPurchases: FirstLastNameTotalPurchases[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNamesAndTotalPriceCustomersPaidDescending()
        .subscribe(data =>  {
          this.namesAndTotalPurchases = data;
        });
  }

}
