import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { FormsModule} from '@angular/forms'; // <-- NgModel lives 
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ToolbarMultirowExample } from './toolbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MdToolbarModule, MdCardModule, MdGridListModule, MdListModule, MdInputModule ],
  declarations: [ AppComponent, HeroDetailComponent, ToolbarMultirowExample ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }