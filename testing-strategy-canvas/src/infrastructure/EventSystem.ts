import { Canvas, TPointerEvent, TPointerEventInfo } from 'fabric';


export class EventSystem {
  constructor(readonly canvas: Canvas) {
    canvas.on('mouse:move', (option) => this.mouseMoveHandler(option));
    canvas.on('mouse:down', (option) => this.mouseDownHandler(option))
    canvas.on('mouse:up', (option) => this.mouseUpHandler(option));
  }

  private mouseDownHandler(option: TPointerEventInfo<TPointerEvent>) {
  }

  private mouseUpHandler(option: TPointerEventInfo<TPointerEvent>) {
  }

  private mouseMoveHandler(option: TPointerEventInfo<TPointerEvent>) {
  }
} 
