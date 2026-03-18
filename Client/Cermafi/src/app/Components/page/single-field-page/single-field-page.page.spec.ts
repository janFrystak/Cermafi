import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFieldPage } from './single-field-page.page';

describe('SingleFielPagePage', () => {
  let component: SingleFieldPage;
  let fixture: ComponentFixture<SingleFieldPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFieldPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
