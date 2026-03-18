import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPagePage } from './school-page.page';

describe('SchoolPagePage', () => {
  let component: SchoolPagePage;
  let fixture: ComponentFixture<SchoolPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolPagePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
