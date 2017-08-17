import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
    <md-card *ngIf="hero">
      <md-card-title>{{hero.name}} details!</md-card-title>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <md-input-container>
          <input mdInput [(ngModel)]="hero.name" placeholder="name">
        </md-input-container>
      </div>
    </md-card>`
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}