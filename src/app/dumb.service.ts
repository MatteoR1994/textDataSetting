import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DumbService {
  private _text: string = '';
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }

  private _color: string = '';
  get color(): string {
    return this._color;
  }
  set color(value: string) {
    this._color = value;
  }



  constructor() {}
}
