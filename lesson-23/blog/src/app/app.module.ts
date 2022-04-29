import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAccordionBasicComponent } from './ngbd-accordion-basic/ngbd-accordion-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdAccordionBasicComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
