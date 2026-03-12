import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { University } from '../../interfaces/university.interface';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'travel-university',
  imports: [ 
    CommonModule,
    FormsModule
  ],
  templateUrl: './university.component.html',
  styleUrl: './university.component.css'
})
export class UniversityComponent {

  universities: University[] = [];
  country: string = '';
  countries: any[] = [];
  isLoading = false;
  hasSearched = false;
  lastSearch = '';

  // Service
  private readonly universityService = inject(UniversityService);

  applyFilter(): void {
    this.getUniversities();
  } 

  getUniversities(): void {
    this.isLoading = true;
    this.hasSearched = true;
    this.lastSearch = this.country;
    this.universityService.getUniversities(this.country).subscribe(data => {
      this.universities = data;
      this.isLoading = false;
    });
  }

  clearSearch(): void {
    this.country = '';
    this.universities = [];
    this.hasSearched = false;
    this.lastSearch = '';
  }

}