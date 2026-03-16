import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragonballService } from '../../services/dragonball';

@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.css'
})
export class DragonballComponent implements OnInit {

  characters: any[] = [];
  searchTerm: string = '';

  private dragonballService = inject(DragonballService);

  ngOnInit(): void {
    this.dragonballService.getAllCharacters().subscribe(res => {
      this.characters = res.items;
    });
  }

  getCharacterByName(name: string): void {
    this.dragonballService.getCharacterByName(name).subscribe(res => {
      this.characters = res;
    });
  } 

  applyFilters(name: string): void {
    this.getCharacterByName(name);
  }
}