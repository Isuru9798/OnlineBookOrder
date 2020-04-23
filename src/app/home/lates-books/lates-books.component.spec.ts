import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesBooksComponent } from './lates-books.component';

describe('LatesBooksComponent', () => {
  let component: LatesBooksComponent;
  let fixture: ComponentFixture<LatesBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatesBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
