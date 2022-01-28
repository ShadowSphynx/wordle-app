import { Component } from '@angular/core';
import words from '../index.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordle-app';

  public wordsIncludingAlphabet: Array<string> = [];
  public wordsExcludingAlphabet: Array<string> = [];
  public wordsWrongPositionAlphabet: Array<string> = [];
  public wordsCorrectPositionAlphabet: Array<string> = [];

  public requiredWords = words.filter(d => d.length == 5);

  ngOnInit(): void {
    this.getWords();
  }

  getWordsIncludingAlphabets() {
    return this.requiredWords.filter(word => {
      return this.wordsIncludingAlphabet.every( character => word.includes(character.toLowerCase())
    )});
  }
  
  getWordsExcludingAlphabets() {
    return this.requiredWords.filter(word => {
      return this.wordsExcludingAlphabet.every( character => !word.includes(character.toLowerCase())
    )});
  }
  
  getWordsInAlphabetPositions() {
    return this.requiredWords.filter(word => {
      let flag = true;
      this.wordsCorrectPositionAlphabet.forEach((val, index) => {
        flag = flag && (val ? word.indexOf(val.toLowerCase()) == index : true);
      })
      return flag;
    });
  }

  getWordsNotInAlphabetPositions() {
    return this.requiredWords.filter(word => {
      let flag = true;
      this.wordsWrongPositionAlphabet.forEach((val, index) => {
        flag = flag && (val ? word.indexOf(val.toLowerCase()) != index : true);
      })
      return flag;
    });
  }

  correctPosition(data: Array<string>) {
    this.wordsCorrectPositionAlphabet = data;
    this.wordsIncludingAlphabet = this.wordsCorrectPositionAlphabet.concat(this.wordsWrongPositionAlphabet);
    this.getWords();
  }

  wrongPosition(data: Array<string>) {
    this.wordsWrongPositionAlphabet = data;
    this.wordsIncludingAlphabet = this.wordsCorrectPositionAlphabet.concat(this.wordsWrongPositionAlphabet);
    this.getWords();
  }

  excludedAlphabets(data: Array<string>) {
    this.wordsExcludingAlphabet = data;
    this.wordsExcludingAlphabet = this.wordsExcludingAlphabet.filter( ( el ) => !this.wordsIncludingAlphabet.includes( el ) );
    this.wordsExcludingAlphabet = this.wordsExcludingAlphabet.filter( ( el ) => !this.wordsCorrectPositionAlphabet.includes( el ) );
    this.getWords();
  }

  getWords() {
    this.requiredWords = words.filter(d => d.length == 5);
    this.requiredWords = this.getWordsIncludingAlphabets();
    this.requiredWords = this.getWordsInAlphabetPositions();
    this.requiredWords = this.getWordsNotInAlphabetPositions();
    this.requiredWords = this.getWordsExcludingAlphabets();
  }
}