import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRegionPage } from './single-region-page';

describe('SingleRegionPage', () => {
  let component: SingleRegionPage;
  let fixture: ComponentFixture<SingleRegionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRegionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRegionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
