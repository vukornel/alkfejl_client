import { Injectable } from '@angular/core';
import { Wine } from '../models/Wine';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  constructor(private http: HttpClient) { }

  listAllWines(){
    return this.http.get<Wine[]>('http://localhost:8080/drink/wines');
  }
}
