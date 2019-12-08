import { Component, OnInit } from '@angular/core';
import { Wine } from '../models/Wine';
import { WinesService } from '../services/wines.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  wines: any[];

  constructor(private winesService: WinesService) { }

  ngOnInit() {
    this.loadWines();
  }

  loadWines(){
    this.winesService.listAllWines().subscribe(
      (response) => this.wines = response
    );
  }
}
