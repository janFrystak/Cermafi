import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportPageComponent } from './admin-import-page.component';

describe('AdminImportPageComponent', () => {
  let component: AdminImportPageComponent;
  let fixture: ComponentFixture<AdminImportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminImportPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminImportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
