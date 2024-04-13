import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivecontainerComponent } from './archivecontainer.component';

describe('ArchivecontainerComponent', () => {
  let component: ArchivecontainerComponent;
  let fixture: ComponentFixture<ArchivecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivecontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
