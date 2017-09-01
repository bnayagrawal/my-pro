import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
    <md-card *ngIf="hero" cols="1" rows="1">
      <md-card-title>{{hero.name}} details!</md-card-title>
        <md-input-container>
          <input mdInput placeholder="id:" disabled value="{{hero.id}}">
        </md-input-container>
        <md-input-container>
          <input mdInput [(ngModel)]="hero.name" placeholder="name">
        </md-input-container>
    </md-card>`,
    styles: [`
        md-card {
          margin:1rem;
        }
      `]
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}