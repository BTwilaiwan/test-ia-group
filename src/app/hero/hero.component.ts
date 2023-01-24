import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public heroList: any[] = [];
  public myHero: any;

  constructor() {}

  ngOnInit() {

    this.heroList = [
      { label: 'Dr Nice'},
      { label: 'Necromancer'},
      { label: 'Bombasto'},
      { label: 'Celeritas'},
      { label: 'Magneta'},
      { label: 'RubberMan'},
      { label: 'Dynama'},
      { label: 'Dr IQ'},
      { label: 'Magma'},
      { label: 'Tornado'},
    ]
  }

  onSelectMyHero(text?: any) {
    this.myHero = text;
  }
}
