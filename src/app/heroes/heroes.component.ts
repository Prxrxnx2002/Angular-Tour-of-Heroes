import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from 'src/mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes : Hero[] = []
  constructor(private heroServ: HeroService, private msgServ: MessageService){}

  ngOnInit(): void {
    this.getHeroes()
   }

  getHeroes(): void {
    this.heroServ.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
   }
}
