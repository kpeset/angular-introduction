import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-message',
  standalone: true,
  imports: [],
  templateUrl: './status-message.component.html',
  styleUrl: './status-message.component.css',
})
export class StatusMessageComponent {
  @Input() message!: string;
}
