import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MatchServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatchServiceProvider {
  colorMatrix;
  colors;

  constructor(public http: Http) {
    this.initColorMatrix();
  }

  initColorMatrix() {
    this.colors = [
      "pink", "red", "orange", "beige", "yellow", "green",
      "light blue", "dark blue", "purple", "brown", "grey",
      "black", "white"
    ]

    this.colorMatrix = [
      [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1], // pink
      [0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1], // red
      [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1], // orange
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1], // beige
      [0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1], // yellow
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1], // green
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], // light blue
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1], // dark blue
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1], // purple
      [0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1], // brown
      [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1], // grey
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // black
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // white
    ];
  }

  getMatchingColors(color) {
    if (this.colors.indexOf(color) < 0) {
      // TODO this could be handled better.
      throw new Error();
    }

    let matchingColors = [];
    let colorIndex = this.colors.indexOf(color);

    // go to the given color's corresponding array in the matrix, and capture matching colors
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colorMatrix[colorIndex][i] == 1) {
        matchingColors.push(this.colors[i]);
      }
    }

    return matchingColors;
  }

}
