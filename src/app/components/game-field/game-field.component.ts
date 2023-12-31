import { Component } from '@angular/core';
import { PlayerBarComponent } from '../game-assets/player-bar/player-bar.component';
import { EnemyBarComponent } from '../game-assets/enemy-bar/enemy-bar.component';
import { BallComponent } from '../game-assets/ball/ball.component';
import { RendererService } from '../../services/renderer.service';

@Component({
  selector: 'app-game-field',
  standalone: true,
  imports: [PlayerBarComponent, EnemyBarComponent, BallComponent],
  templateUrl: './game-field.component.html',
  styleUrl: './game-field.component.css'
})
export class GameFieldComponent {
  constructor(
    public renderer: RendererService,
  ){
  }
  getWidth(){
    return this.renderer.convertToPx(this.renderer.fieldWidth);
  }
  getHeight(){
    return this.renderer.convertToPx(this.renderer.fieldHeight);
  }
}
