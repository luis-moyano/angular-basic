import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
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
export class UniversityComponent implements OnInit {

  universities: University[] = [];
  country: string = '';

  // Service
  private readonly universityService = inject(UniversityService);

  ngOnInit(): void {
    this.getUniversities();
  }

  getUniversities(): void {
    this.universityService.getUniversities(this.country).subscribe(data => {
      this.universities = data;
    });
  }  

}
