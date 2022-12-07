import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalServiceComponent } from './personal-service.component';

describe('PersonalServiceComponent', () => {
  let component: PersonalServiceComponent;
  let fixture: ComponentFixture<PersonalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
