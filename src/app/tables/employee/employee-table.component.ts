import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  employees: Employee[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllEmployees().subscribe(data =>  {
      this.employees = data;
    });
  }

}
