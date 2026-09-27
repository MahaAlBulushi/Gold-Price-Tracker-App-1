import { Component, inject } from '@angular/core';
import { Header } from './components/header/header';
import { GoldPriceCard } from './components/gold-price-card/gold-price-card';
import { GoldCalculator } from './components/gold-calculator/gold-calculator';
import { GoldPriceChart } from './components/gold-price-chart/gold-price-chart';
import { PriceHistory } from './components/price-history/price-history';
import { GoldService } from './services/gold.service';
import { GoldPrice, GoldHistory } from './models/gold.model';

@Component({
  imports: [Header, GoldPriceCard, GoldCalculator, GoldPriceChart, PriceHistory],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // Workshop version: data comes from the local GoldService.
  // Later, GoldService could fetch this from a real REST API instead.
  private goldService = inject(GoldService);

  goldPrices: GoldPrice[] = this.goldService.getPrices();
  goldHistory: GoldHistory[] = this.goldService.getHistory();
}
