import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {Supplier} from '../../models/supplier';

@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.scss']
})
export class SupplierTableComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllSuppliers().subscribe(data =>  {
      this.suppliers = data;
    });
  }

}
