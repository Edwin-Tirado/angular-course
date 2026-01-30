import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../../components/dragonball/character-list/character-list/character-list.component";
import { CharacterAddComponent } from "../../../components/dragonball/character-add/character-add/character-add.component";
import { DragonballServiceService } from '../../../services/dragonball.service.service';

interface DragonBallCharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {
  name = signal('');
  power = signal(0);

  //Mejor forma de llamar a los servicios
  public dragonballService = inject(DragonballServiceService);

  /*characters = signal<DragonBallCharacter[]>([
      { id: 1, name: 'Goku', power: 9001 },
      { id: 2, name: 'Vegeta', power: 8500 },

    ]);

  addCharacter(character: DragonBallCharacter): void {
     this.characters.update( list => [ ...list, character ]);
   }*/

    /*powerClasses = computed(() => {
      return {
        'text-danger': true,
        };
      });*/

        /*constructor(
    public dragonballService: DragonballServiceService
  ) {}*/



    resetFields(){
      this.name.set('');
      this.power.set(0);
    }
}
