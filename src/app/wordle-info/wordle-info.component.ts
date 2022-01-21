import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wordle-info',
  templateUrl: './wordle-info.component.html',
  styleUrls: ['./wordle-info.component.css']
})
export class WordleInfoComponent {

  @Output() sendDataEvent = new EventEmitter<Array<string>>();
  @Input() colour: string = '';
  @Input() heading: string = '';
  @Input() showTextArea: boolean = false;

  public alphabets: Array<string> = Array(5);
  public textAreaData: string = '';

  constructor() { }

  counter(i: number) {
    return new Array(i);
  }

  sendData() {
    if(this.showTextArea) {
      this.alphabets = this.textAreaData.split(' ');
    }
    this.sendDataEvent.emit(this.alphabets);
  }
}
