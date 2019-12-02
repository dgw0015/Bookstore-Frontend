import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {FirstLastNameAndTitle} from '../../models/firstLastNameAndTitle';

@Component({
  selector: 'app-first-last-name-and-title',
  templateUrl: './first-last-name-and-title.component.html',
  styleUrls: ['./first-last-name-and-title.component.scss']
})
export class FirstLastNameAndTitleComponent implements OnInit {

  namesAndTitles: FirstLastNameAndTitle[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.customerOrderedCat3AndCat4().subscribe(data =>  {
      this.namesAndTitles = data;
    });
  }

}
