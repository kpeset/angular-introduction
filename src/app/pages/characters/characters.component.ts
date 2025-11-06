import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CharacterCardComponent } from '../../components/character-card/character-card.component';

import { Character } from '../../models/character.model';
import { StatusMessageComponent } from '../../ui/status-message/status-message.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterCardComponent, StatusMessageComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  private http = inject(HttpClient);

  apiUrl = 'https://hp-api.onrender.com/api/characters';
  characters: Character[] = [];

  isLoading = true;
  messageStatus = 'Please wait...';

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.http.get<Character[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.characters = data.filter((c) => c.image);
        this.isLoading = false;
        this.messageStatus = '';
      },
      error: (err) => {
        console.error('API Error', err);
        this.isLoading = false;
        this.messageStatus = 'Server error';
      },
    });
  }
}
