import { Component } from '@angular/core';
import { RendererService } from '../../../services/renderer.service';

@Component({
  selector: 'app-player-bar',
  standalone: true,
  imports: [],
  templateUrl: './player-bar.component.html',
  styleUrl: './player-bar.component.css'
})
export class PlayerBarComponent {
  barWidth: number = 100;
  private minPos: number = 0;
  private maxPos: number = this.renderer.fieldWidth - this.barWidth;
  currentPosition: number = ((this.maxPos-this.minPos + this.barWidth/4)/2);
  moveSpeed: number = 20;

  constructor(
    public renderer: RendererService,
  ){};

  moveLeft(){
    this.currentPosition = this.currentPosition - this.moveSpeed;
    if (this.currentPosition < this.minPos){
      this.currentPosition = this.minPos;
    }
  }

  moveRight(){
    this.currentPosition = this.currentPosition + this.moveSpeed;
    if (this.currentPosition > this.maxPos){
      this.currentPosition = this.maxPos;
    }
  }

  getPosition(): string{
    return this.renderer.convertToPx(this.currentPosition);
  }
}
