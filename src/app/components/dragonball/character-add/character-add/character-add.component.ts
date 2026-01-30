import { Component, output, signal } from '@angular/core';
import { DragonBallCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<DragonBallCharacter>();

  addCharacter(): void {
     if( !this.name() || !this.power() || this.power() <= 0 ) return

      const newCharacter: DragonBallCharacter = {
        id: Math.floor(Math.random() * 10000), // Temporary ID generation
        name: this.name(),
        power: this.power(),
      };
      //console.log('New Character:', newCharacter);
      this.newCharacter.emit(newCharacter);
      this.resetFields();
    }

    resetFields(){
      this.name.set('');
      this.power.set(0);
    }

}
