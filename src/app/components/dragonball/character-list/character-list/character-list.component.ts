import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { DragonBallCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  characters = input.required<DragonBallCharacter[]>();
  listname = input.required<string>();
}
