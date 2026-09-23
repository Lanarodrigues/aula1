import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cardproduto } from './cardproduto';

describe('Cardproduto', () => {
  let component: Cardproduto;
  let fixture: ComponentFixture<Cardproduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardproduto],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardproduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
