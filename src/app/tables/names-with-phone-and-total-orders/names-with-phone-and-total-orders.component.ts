import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {FirstLastNameAndPhoneAndTotalOrders} from '../../models/firstLastNameAndPhoneAndTotalOrders';

@Component({
  selector: 'app-names-with-phone-and-total-orders',
  templateUrl: './names-with-phone-and-total-orders.component.html',
  styleUrls: ['./names-with-phone-and-total-orders.component.scss']
})
export class NamesWithPhoneAndTotalOrdersComponent implements OnInit {

  namesWithPhonesAndTotalOrders: FirstLastNameAndPhoneAndTotalOrders[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.moreThan3AndPhone().subscribe(data =>  {
      this.namesWithPhonesAndTotalOrders = data;
    })
  }

}
