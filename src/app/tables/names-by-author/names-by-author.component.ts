import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {NamesByAuthor} from '../../models/namesByAuthor';

@Component({
  selector: 'app-names-by-author',
  templateUrl: './names-by-author.component.html',
  styleUrls: ['./names-by-author.component.scss']
})
export class NamesByAuthorComponent implements OnInit {

  namesByAuthor: NamesByAuthor[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.customersOrderedBookByAuthor1().subscribe(data =>  {
      this.namesByAuthor = data;
    });
  }

}
