import { Component, inject, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'travel-country',
  imports: [NgClass, FormsModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {

  countries: any[] = [];
  filteredCountries: any[] = [];
  filterText = '';

  // Services
  private readonly countryService = inject(CountryService);

  ngOnInit(): void {
      this.getCountries();
  }

  getCountries(): void {
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  applyFilter(): void {
    const term = this.filterText.trim().toLowerCase();
    this.filteredCountries = term
      ? this.countries.filter(c => c.name.common.toLowerCase().includes(term))
      : [...this.countries];
  }

  clearFilter(): void {
    this.filterText = '';
    this.filteredCountries = [...this.countries];
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

  getCountryByName(name: string): void {
    this.countryService.getCountryByName(name).subscribe(data => {
      console.log(data);
    });
  }

}