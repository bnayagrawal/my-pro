import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { ToolbarMultirowExample } from './toolbar.component';

@Component({
  selector: 'my-app',
  template: `
    <toolbar-multirow-example></toolbar-multirow-example>
    <md-grid-list cols="2" rowHeight="1:1">
      <md-grid-tile>
        <md-card>
          <md-card-title>My Heroes</md-card-title>
          <md-list>
            <md-list-item *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
              <md-icon aria-label="Person_Pin" class="material-icons" md-list-icon>person_pin</md-icon>
              <h3 md-line> {{hero.name}} </h3>
              <p md-line>
                <span> {{hero.id}} </span>
              </p>
            </md-list-item>
          </md-list>
        </md-card>
      </md-grid-tile>
      
      <md-grid-tile>
        <hero-detail [hero]="selectedHero"></hero-detail>
      </md-grid-tile>
    </md-grid-list>`,
  styles: [`
    md-grid-list {
      margin:1rem;
    }

    .selected {
      background-color: #f5f5f5 !important;
    }

    md-list-item:hover {
      background-color: #f5f5f5;
    }
    
    md-list-item {
      cursor: pointer;
    }
  `],
  providers: [HeroService]
})

export class AppComponent implements OnInit { 
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}

