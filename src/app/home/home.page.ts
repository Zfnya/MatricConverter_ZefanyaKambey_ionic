import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputValue: number = 0;
  fromUnit: 'kilogram' | 'milligram' = 'milligram';
  toUnit: 'kilogram' | 'milligram' = 'kilogram';
  result: number | null = null;

  convert() {
    const conversionRates: Record<'kilogram' | 'milligram', number> = {
      kilogram: 1000000,
      milligram: 1,
    };

    if (this.inputValue !== null && !isNaN(this.inputValue)) {
      let valueInMeters = this.inputValue * conversionRates[this.fromUnit];

      this.result = valueInMeters / conversionRates[this.toUnit];
    } else {
      this.result = null;
    }
  }
}
