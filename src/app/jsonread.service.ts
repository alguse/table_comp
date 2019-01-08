import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonreadService {
  JSONData: any = [];

  constructor(private http: HttpClient) { }

  LoadJson() {
    const path = './assets/sample_data.json';
    return this.http.get(path);
  }
}
