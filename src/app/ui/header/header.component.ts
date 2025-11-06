import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  links = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Characters',
      path: '/characters',
    },
    {
      label: 'Game',
      path: '/game',
    },
  ];
}
