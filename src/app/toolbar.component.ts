import { Component } from '@angular/core';

@Component({
  selector: 'toolbar-multirow-example',
  template:`
    <md-toolbar color="primary">
        <span>{{title}}</span>
    </md-toolbar>`,
    styles: [`
      .material-icons {
        padding: 0 14px;
      }
      .example-spacer {
        flex: 1 1 auto;
      }
    `]
})

export class ToolbarMultirowExample {
    title = "Tour of heroes";
}