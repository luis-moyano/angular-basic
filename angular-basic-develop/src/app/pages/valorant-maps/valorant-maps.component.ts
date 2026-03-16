import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorantMapsService } from '../../services/valorant-maps.service';
import { ValorantMap } from '../../interfaces/valorant-maps';

@Component({
  selector: 'app-valorant-maps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valorant-maps.component.html',
  styleUrl: './valorant-maps.component.css'
})
export class ValorantMapsComponent implements OnInit {
  maps: ValorantMap[] = [];

  private readonly valorantMapsService = inject(ValorantMapsService);

  ngOnInit(): void {
    this.valorantMapsService.getAllMaps().subscribe({
      next: (response) => {
        this.maps = response.data;
      }
    });
  }
}
