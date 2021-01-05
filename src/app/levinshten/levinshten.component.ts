import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levinshten',
  templateUrl: './levinshten.component.html',
  styleUrls: ['./levinshten.component.scss']
})
export class LevinshtenComponent implements OnInit {

  searchTerm: string = "";
  maxDistance: number = 0;
  products: string[] = [
    "Jet Ski",
    "Jacuzzi",
    "Banana",
    "Apple",
    "Iphone",
    "Mac",
    "Windows PC",
    "Dog",
    "Cat",
    "Pet"
  ];

  filteredProducts: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  updateDistance(value: number) {
    this.maxDistance = value;
  }

  matchWords(value: string = null) {
    if (value != null && value != this.searchTerm) {
      this.searchTerm = value;
    }
    console.log(this.searchTerm);
    this.filteredProducts = [];
    this.products.forEach((product) => {
      if (this.levenshtein(this.searchTerm, product) <= this.maxDistance) {
        this.filteredProducts.push(product); 
      }
    })

  }

  submit() {
    this.matchWords();
  }

  levenshtein(a: string, b: string): number {
    //Algorithmus kommt hier
    return 0;
}
