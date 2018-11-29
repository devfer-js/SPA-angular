import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../shared/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:Heroe;
  constructor(private _heroesService:HeroesService, private activatedRouter:ActivatedRoute, private router : Router) {
    this.activatedRouter.params.subscribe ((params)=>{
      this.heroe= this._heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

  navegar (){
    this.router.navigate(['/heroes'])
  }
}
