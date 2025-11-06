import { Component } from '@angular/core';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  characters: Character[] = [
    {
      id: 1,
      name: 'Harry Potter',
      image: 'https://ik.imagekit.io/hpapi/harry.jpg',
    },
    {
      id: 2,
      name: 'Hermione Grander',
      image: 'https://ik.imagekit.io/hpapi/hermione.jpeg',
    },
    {
      id: 3,
      name: 'Ron Weasley',
      image: 'https://ik.imagekit.io/hpapi/ron.jpg',
    },
  ];
}
