import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundooheaderComponent } from './fundooheader.component';

describe('FundooheaderComponent', () => {
  let component: FundooheaderComponent;
  let fixture: ComponentFixture<FundooheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundooheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundooheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
