import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityInfosComponent } from './city-infos.component';

describe('CityInfosComponent', () => {
  let component: CityInfosComponent;
  let fixture: ComponentFixture<CityInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
