import { TestBed } from '@angular/core/testing';
import { GoldCalculator } from './gold-calculator';

describe('GoldCalculator', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldCalculator],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GoldCalculator);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should calculate the gold value for the selected karat and weight', () => {
    const fixture = TestBed.createComponent(GoldCalculator);
    const component = fixture.componentInstance;
    component.goldPrices = [{ karat: '21K', price: 47.1 }];
    component.selectedKarat = '21K';
    component.grams = 10;

    component.calculateGoldValue();

    expect(component.totalValue).toBe(471);
    expect(component.hasCalculated).toBe(true);
  });
});
