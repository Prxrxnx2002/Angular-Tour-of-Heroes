import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from 'src/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgServ: MessageService) { }
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.msgServ.add("Fetched Heroes from Hero Services")
    return heroes
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!
    this.msgServ.add(`Fetched Hero id=${id} from Hero Service`)
    return of(hero)
  }
}
