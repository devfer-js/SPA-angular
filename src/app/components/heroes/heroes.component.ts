import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../shared/heroe';
import { HeroesService } from '../../shared/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe [];
  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes= this._heroesService.getHeroes();
  }
  navegar (idx:number){
    this.router.navigate (['/heroe',idx])
  }
}
