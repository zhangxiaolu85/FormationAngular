import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneEditionComponent } from './personne-edition.component';

describe('PersonneEditionComponent', () => {
  let component: PersonneEditionComponent;
  let fixture: ComponentFixture<PersonneEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
