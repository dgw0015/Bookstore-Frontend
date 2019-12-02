import { Component, OnInit } from '@angular/core';
import {Shipper} from '../../models/shipper';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-shipper-table',
  templateUrl: './shipper-table.component.html',
  styleUrls: ['./shipper-table.component.scss']
})
export class ShipperTableComponent implements OnInit {

  shippers: Shipper[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllShippers().subscribe(data =>  {
      this.shippers = data;
    });
  }

}
