import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashcontainerComponent } from './trashcontainer.component';

describe('TrashcontainerComponent', () => {
  let component: TrashcontainerComponent;
  let fixture: ComponentFixture<TrashcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
