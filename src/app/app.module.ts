import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonreadService } from './jsonread.service';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JsonreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
