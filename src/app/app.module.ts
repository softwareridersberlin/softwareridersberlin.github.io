import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurProfessionalismsPageComponent } from './pages/our-professionalisms-page/our-professionalisms-page.component';
import { WhatSourcesDoWeBaseOnPageComponent } from './pages/what-sources-do-we-base-on-page/what-sources-do-we-base-on-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurProfessionalismsPageComponent,
    WhatSourcesDoWeBaseOnPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
