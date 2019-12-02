import { Component, OnInit } from '@angular/core';
import {FirstAndLastName} from '../../models/firstAndLastName';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-first-and-last-name',
  templateUrl: './first-and-last-name.component.html',
  styleUrls: ['./first-and-last-name.component.scss']
})
export class FirstAndLastNameComponent implements OnInit {

  firstLastNames : FirstAndLastName[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.customersSpentMoreThan80().subscribe(data =>  {
      this.firstLastNames = data;
    });
  }

}
