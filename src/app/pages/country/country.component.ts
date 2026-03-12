import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'travel-country',
  imports: [
    NgClass, 
    FormsModule,
    ButtonModule
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {

  countries: Country[] = [];
  filterText = '';
  isLoading = false;

  // Services
  private readonly countryService = inject(CountryService);

  getCountries(): void {
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = data;
    });
  }

  applyFilter(): void {
    this.getCountryByName();
  }

  clearFilter(): void {
    this.filterText = '';
  }

  regionBadge(region: string): string {
    const map: Record<string, string> = {
      Africa: 'bg-warning text-dark',
      Americas: 'bg-success',
      Asia: 'bg-danger',
      Europe: 'bg-primary',
      Oceania: 'bg-info text-dark',
      Antarctic: 'bg-secondary',
    };
    return map[region] ?? 'bg-secondary';
  }

  getCountryByName(): void {
    this.isLoading = true;
    this.countryService.getCountryByName(this.filterText).subscribe(data => {
      this.countries = data;
      this.isLoading = false;
    });
  }
  
}