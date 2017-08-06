import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dnd35sheetComponent } from './dnd35sheet.component';

describe('Dnd35sheetComponent', () => {
  let component: Dnd35sheetComponent;
  let fixture: ComponentFixture<Dnd35sheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dnd35sheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dnd35sheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
