import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurProfessionalismsPageComponent } from './pages/our-professionalisms-page/our-professionalisms-page.component';
import { ReferencesComponent } from './pages/references/references.component';
import { WhatSourcesDoWeBaseOnPageComponent } from './pages/what-sources-do-we-base-on-page/what-sources-do-we-base-on-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: "our-professionalisms",
    component: OurProfessionalismsPageComponent,
  },
  {
    path: "what-sources-do-we-base-on",
    component: WhatSourcesDoWeBaseOnPageComponent,
  },
  {
    path: "references",
    component: ReferencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
