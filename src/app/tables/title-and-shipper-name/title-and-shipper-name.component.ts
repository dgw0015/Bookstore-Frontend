import { Component, OnInit } from '@angular/core';
import {TitleAndShipperName} from '../../models/titleAndShipperName';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-title-and-shipper-name',
  templateUrl: './title-and-shipper-name.component.html',
  styleUrls: ['./title-and-shipper-name.component.scss']
})
export class TitleAndShipperNameComponent implements OnInit {

  titleAndShippers: TitleAndShipperName[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.titlesOfBooksShippedOnFourth().subscribe(data =>  {
      this.titleAndShippers = data;
    });
  }

}
