import { Component } from '@angular/core';
import { RendererService } from '../../../services/renderer.service';
import { PlayerBarComponent } from '../player-bar/player-bar.component';
import { EnemyBarComponent } from '../enemy-bar/enemy-bar.component';

@Component({
  selector: 'app-ball',
  standalone: true,
  imports: [],
  templateUrl: './ball.component.html',
  styleUrl: './ball.component.css'
})
export class BallComponent {
  private xMin: number = 0;
  private xMax: number = this.renderer.fieldWidth;
  private yMin: number = 0;
  private yMax: number = this.renderer.fieldHeight;

  xPos: number = (this.xMax-this.xMin)/2;
  yPos: number = (this.yMax-this.yMin)/2;

  xVel: number = 10;
  yVel: number = 15;

  constructor(
    public renderer: RendererService,
  ){
  };

  getPosX(): string{
    return this.renderer.convertToPx(this.xPos);
  }
  getPosY(): string{
    return this.renderer.convertToPx(this.yPos);
  }

  updatePosition(): void{
    this.xPos = this.xPos + this.xVel;
    this.yPos = this.yPos + this.yVel;

    this.CheckCollisionWithWalls();
    this.checkCollisionWithPlayer();
    this.checkCollisionWithEnemy();

    console.log("x:", this.xPos, "y:", this.yPos);
  }

  checkCollisionWithPlayer(){
    const offset = 40;
    const playerYPos = this.yMax - offset;

    if (this.yPos > playerYPos) {
      this.yVel = -this.yVel;
    }
  }

  checkCollisionWithEnemy(){
    const offset = 0;
    const enemyYPos = this.yMin + offset;

    if (this.yPos < enemyYPos) {
      this.yVel = -this.yVel;
    }
  }

  CheckCollisionWithWalls(){
    // CHECK RIGHT WALL
    if (this.xPos >= this.xMax) {
      this.xVel = -this.xVel;
    } else if (this.xPos <= this.xMin) {
      this.xVel = -this.xVel;
    }
  }

  ngOnInit(){
    setInterval(() => {
      this.updatePosition();
    }, this.renderer.frameInterval)
  }
}
