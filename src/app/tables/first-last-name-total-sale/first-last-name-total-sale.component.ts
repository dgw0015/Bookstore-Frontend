import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {FirstLastNameTotalSale} from '../../models/firstLastNameTotalSale';

@Component({
  selector: 'app-first-last-name-total-sale',
  templateUrl: './first-last-name-total-sale.component.html',
  styleUrls: ['./first-last-name-total-sale.component.scss']
})
export class FirstLastNameTotalSaleComponent implements OnInit {

  namesAndTotalSales: FirstLastNameTotalSale[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.employeeNameAndTotalSale().subscribe(data =>  {
      this.namesAndTotalSales = data;
    });
  }

}
