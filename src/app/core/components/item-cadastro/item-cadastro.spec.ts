import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCadastro } from './item-cadastro';

describe('ItemCadastro', () => {
  let component: ItemCadastro;
  let fixture: ComponentFixture<ItemCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
