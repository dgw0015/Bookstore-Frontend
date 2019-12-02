import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  customers: Customer[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllCustomers().subscribe(data =>  {
      this.customers = data;
    });
  }

}
