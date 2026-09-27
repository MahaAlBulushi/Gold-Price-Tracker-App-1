import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gold-price-card',
  templateUrl: './gold-price-card.html',
  styleUrl: './gold-price-card.css',
  imports: [],
})
export class GoldPriceCard {
  // Data comes in from the parent component through these inputs
  @Input() karat = '';
  @Input() price = 0;

  // Turns '18K' into the Arabic label 'عيار 18'
  get karatLabel(): string {
    return 'عيار ' + this.karat.replace('K', '');
  }
}
