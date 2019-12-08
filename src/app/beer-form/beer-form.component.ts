import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeersService } from '../services/beer.service';
import { Beer } from '../models/beer';
 
@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent {
 
  beer: Beer;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private beerService: BeersService) {
    this.beer = new Beer(this.beer.id, this.beer.type, this.beer.origin, this.beer.amount);
  }
 
  onSubmit() {
    //this.beerService.save(this.beer).subscribe(result => this.gotoBeerList());
  }
 
  gotoBeerList() {
    this.router.navigate(['/drink/beers']);
  }
}