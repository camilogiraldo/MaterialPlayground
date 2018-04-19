import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoupdateComponent } from './autoupdate.component';

describe('AutoupdateComponent', () => {
  let component: AutoupdateComponent;
  let fixture: ComponentFixture<AutoupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
