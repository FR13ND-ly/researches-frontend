import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'annal-item',
  imports: [RouterLink],
  templateUrl: './annal-item.component.html',
  styleUrl: './annal-item.component.scss'
})
export class AnnalItemComponent {
  annal: any = input();
}
