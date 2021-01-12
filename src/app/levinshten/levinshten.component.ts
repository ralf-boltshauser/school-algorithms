import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-levinshten',
  templateUrl: './levinshten.component.html',
  styleUrls: ['./levinshten.component.scss'],
})
export class LevinshtenComponent implements OnInit {
  searchTerm: string = '';
  maxDistance: number = 0;
  products: string[] = [
    'Jet Ski',
    'Jacuzzi',
    'Banana',
    'Apple',
    'Iphone',
    'Mac',
    'Windows PC',
    'Dog',
    'Cat',
    'Pet',
  ];

  filteredProducts: string[] = [];
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (
      this.levenshtein('', 'cat') == 3 &&
      this.levenshtein('cat', 'dot') == 2
    ) { 
      this._snackBar.open('Levenshtein is up and running successfully', 'Close', { duration: 5000 });
    } else {
      this._snackBar.open('Something went wrong, please restart or contact the developer.', 'Close', { duration: 5000 });

    }
  }

  updateDistance(value: number) {
    this.maxDistance = value;
  }

  matchWords(value: string = null) {
    if (value != null && value != this.searchTerm) {
      this.searchTerm = value;
    }
    this.filteredProducts = [];
    this.products.forEach((product) => {
      if (this.levenshtein(this.searchTerm, product) <= this.maxDistance) {
        this.filteredProducts.push(product);
      }
    });
  }

  submit() {
    this.matchWords();
  }

  levenshtein(a: string, b: string): number {
    const aLength: number = a.length;
    const bLength: number = b.length;

    if (aLength == 0) {
      return bLength;
    }
    if (bLength == 0) {
      return aLength;
    }

    const matrix = new Array<number[]>(bLength + 1);
    for (let i = 0; i <= bLength; ++i) {
      let row = (matrix[i] = new Array<number>(aLength + 1));
      row[0] = i;
    }
    const firstRow = matrix[0];
    for (let j = 1; j <= aLength; ++j) {
      firstRow[j] = j;
    }
    for (let i = 1; i <= bLength; ++i) {
      for (let j = 1; j <= aLength; ++j) {
        if (a.charAt(j - 1) == b.charAt(i - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] =
            Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) +
            1;
        }
      }
    }
    //console.log(matrix);

    return matrix[bLength][aLength];
  }
}
