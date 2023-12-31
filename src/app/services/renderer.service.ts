import { Injectable } from '@angular/core';
import { PlayerBarComponent } from '../components/game-assets/player-bar/player-bar.component';
import { EnemyBarComponent } from '../components/game-assets/enemy-bar/enemy-bar.component';
import { BallComponent } from '../components/game-assets/ball/ball.component';

@Injectable({
  providedIn: 'root'
})

// RENDERER HOLDS ALL IMPORTANT GAME INFO
export class RendererService {
  private fps: number = 10;
  frameInterval = this.calculateFrameInterval(this.fps); //ms

  fieldWidth: number = 640;
  fieldHeight: number = 640;

  private calculateFrameInterval(fps: number): number{
    const second: number = 1000;
    let frameInterval: number = second/fps;

    return frameInterval;
  }

  public convertToPx(value: number): string{
    return value + "px";
  }
}
