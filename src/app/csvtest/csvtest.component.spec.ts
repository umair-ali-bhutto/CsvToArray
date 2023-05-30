import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvtestComponent } from './csvtest.component';

describe('CsvtestComponent', () => {
  let component: CsvtestComponent;
  let fixture: ComponentFixture<CsvtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
