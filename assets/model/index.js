'use strict';

export default class modeString {
  constructor(str, mode) {
    this.str = str;
    this.mode = mode;
  }
  changeMode() {
    switch (this.mode) {
      case 'lower':
        return this.str.toLowerCase();

      case 'upper':
        return this.str.toUpperCase();

      case 'reverse':
          let arr = this.str.split(' ');
          console.log(arr);
          arr.reverse();
          console.log(arr);
        return arr.join(' ');

      default:
        return this.str;
    }
  }
}