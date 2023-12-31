import { Component } from '@angular/core';
import { GameFieldComponent } from '../../components/game-field/game-field.component';
import { RendererService } from '../../services/renderer.service';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [GameFieldComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  constructor(
  ) {}
}
