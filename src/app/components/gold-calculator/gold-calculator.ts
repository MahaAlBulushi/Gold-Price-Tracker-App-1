import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoldPrice } from '../../models/gold.model';

@Component({
  selector: 'app-gold-calculator',
  templateUrl: './gold-calculator.html',
  styleUrl: './gold-calculator.css',
  imports: [FormsModule],
})
export class GoldCalculator {
  @Input() goldPrices: GoldPrice[] = [];

  // The karat currently selected by the user
  selectedKarat = '21K';
  grams = 10;
  totalValue = 0;
  hasCalculated = false;

  calculateGoldValue() {
    const gold = this.goldPrices.find((item) => item.karat === this.selectedKarat);

    if (gold) {
      this.totalValue = gold.price * this.grams;
      this.hasCalculated = true;
    }
  }

  // Used in the template to show "10 x 47.100 OMR"
  get selectedPrice(): number {
    const gold = this.goldPrices.find((item) => item.karat === this.selectedKarat);
    return gold ? gold.price : 0;
  }

  // Turns '21K' into the Arabic label 'عيار 21'
  karatLabel(karat: string): string {
    return 'عيار ' + karat.replace('K', '');
  }
}
