import { Component, OnInit } from '@angular/core';
import {Subject} from '../../models/subject';
import {DataService} from '../../data/data.service';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {

  subjects: Subject[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllSubjects().subscribe(data =>  {
      this.subjects = data;
    });
  }

}
