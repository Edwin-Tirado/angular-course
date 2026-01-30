import { effect, Injectable, signal } from '@angular/core';
import { DragonBallCharacter } from '../components/interfaces/character.interface';

const loadFromLocalStorage = (): DragonBallCharacter[] => {
  const characters = localStorage.getItem('dragonball-characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballServiceService {

  characters = signal<DragonBallCharacter[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 8500 },

      ]);

  addCharacter(character: DragonBallCharacter): void {
     this.characters.update( list => [ ...list, character ]);
   }

   saveToLocalStorage = effect(() => {
    //console.log(`Saving to local storage ${this.characters().length} characters`);
    localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
  });


  constructor() { }
}
