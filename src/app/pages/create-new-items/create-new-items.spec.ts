import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewItems } from './create-new-items';

describe('CreateNewItems', () => {
  let component: CreateNewItems;
  let fixture: ComponentFixture<CreateNewItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
