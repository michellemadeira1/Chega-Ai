import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-morador',
   standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './morador.component.html',
  styleUrl: './morador.component.scss'
})
export class MoradorComponent {

}
