import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {SubjectCategoryName} from '../../models/subjectCategoryName';

@Component({
  selector: 'app-subject-name-only',
  templateUrl: './subject-name-only.component.html',
  styleUrls: ['./subject-name-only.component.scss']
})
export class SubjectNameOnlyComponent implements OnInit {

  subjectCategoryNames: SubjectCategoryName[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getCategoryOfBooksBySupplier().subscribe(data => {
      this.subjectCategoryNames = data;
    });
  }


}
