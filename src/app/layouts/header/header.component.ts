import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: `ul { display: flex, }`,
  styleUrl: `./header.scss`
})
export class HeaderComponent {
title= 'hello Mundo Feliz'
}
