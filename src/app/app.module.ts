import { enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurProfessionalismsPageComponent } from './pages/our-professionalisms-page/our-professionalisms-page.component';
import { WhatSourcesDoWeBaseOnPageComponent } from './pages/what-sources-do-we-base-on-page/what-sources-do-we-base-on-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { MAIL_URL } from './core/mail-url.token';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpRequestInterceptor } from './core/loading-interceptor.service';
import { ReferencesComponent } from './pages/references/references.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';

if (environment.production) {
  enableProdMode();
}


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurProfessionalismsPageComponent,
    WhatSourcesDoWeBaseOnPageComponent,
    ReferencesComponent,
    OurTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: MAIL_URL, useValue: environment.mail_url },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
