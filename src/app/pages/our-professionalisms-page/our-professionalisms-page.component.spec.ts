import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProfessionalismsPageComponent } from './our-professionalisms-page.component';

describe('OurProfessionalismsPageComponent', () => {
  let component: OurProfessionalismsPageComponent;
  let fixture: ComponentFixture<OurProfessionalismsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProfessionalismsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProfessionalismsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
