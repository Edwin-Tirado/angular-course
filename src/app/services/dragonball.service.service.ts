import { Injectable, signal } from '@angular/core';
import { DragonBallCharacter } from '../components/interfaces/character.interface';

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


  constructor() { }
}
