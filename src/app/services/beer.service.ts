import { Injectable } from '@angular/core';
import { Beer } from '../models/Beer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  listAllBeers(){
    return this.http.get<Beer[]>('http://localhost:8080/drink/beers');
  }
}
