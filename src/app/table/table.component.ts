import { Component, OnInit } from '@angular/core';
import {JsonreadService} from '../jsonread.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector : 'app-table',
  templateUrl : './table.component.html',
  styleUrls : ['./table.component.css']
})
export class TableComponent implements OnInit {

  JSONData: any = [];
  rowOptions = [10, 20, 30, 40, 50];
  rowLimit = 10;
  rowStart = 0;
  total = 0;
  page = 1;
  limit = 10;
  currMin = 0;
  offset = 0;
  loading = false;
  currMax = 0;
  rowsSelected: Number;
  constructor(private jsonreadService: JsonreadService) { }

    goToPage(n: number): void {
      this.page = n;
      this.getRecords(0);
    }

    onNext(): void {
      this.page ++;
      this.getRecords(0);
    }

    onPrev(): void {
      this.page --;
      this.getRecords(0);
    }

  getRecords(all: number = 1): void {
    this.rowStart = (( this.page - 1 ) * this.limit);
    this.rowLimit = (( this.page ) * this.limit);
      this.loading = true;
      this.jsonreadService.LoadJson().subscribe( result => {
      this.JSONData = result;
      this.total = this.JSONData.length;
      this.loading = false;
      if (all === 1) {
        this.rowStart = 0;
        this.rowLimit = this.total;
        this.limit  = this.total;
      }
    },
      (err: HttpErrorResponse) => {
        this.JSONData = null;
      }
  );
  }

  changeRows(rowVal: any) {
    if (rowVal !== 0) {
      this.rowLimit = rowVal;
      this.limit = rowVal;
      this.page = 1;
    } else {
      this.limit = 10;
      this.page = 1;
    }
    this.getRecords(0);
  }

  showAll() {
      this.page = 1;
      this.getRecords(1);
  }

  ngOnInit() {
    this.getRecords(0);
  }

}
