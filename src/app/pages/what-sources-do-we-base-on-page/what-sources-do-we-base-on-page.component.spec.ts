import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatSourcesDoWeBaseOnPageComponent } from './what-sources-do-we-base-on-page.component';

describe('WhatSourcesDoWeBaseOnPageComponent', () => {
  let component: WhatSourcesDoWeBaseOnPageComponent;
  let fixture: ComponentFixture<WhatSourcesDoWeBaseOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatSourcesDoWeBaseOnPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatSourcesDoWeBaseOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
