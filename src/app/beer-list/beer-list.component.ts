import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/Beer';
import { BeersService } from '../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: any[];

  constructor(private beersService: BeersService) { }

  ngOnInit() {
    this.loadBeers();
  }

  loadBeers(){
    this.beersService.listAllBeers().subscribe(
      (response) => this.beers = response
    );
  }
}