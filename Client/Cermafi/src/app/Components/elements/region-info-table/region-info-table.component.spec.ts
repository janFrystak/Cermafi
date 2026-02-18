import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionInfoTableComponent } from './region-info-table.component';

describe('RegionInfoTableComponent', () => {
  let component: RegionInfoTableComponent;
  let fixture: ComponentFixture<RegionInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionInfoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
