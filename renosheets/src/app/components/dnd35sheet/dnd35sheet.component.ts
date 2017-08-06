import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd35sheet',
  templateUrl: './dnd35sheet.component.html',
  styleUrls: ['./dnd35sheet.component.css']
})
export class Dnd35sheetComponent implements OnInit {
  statStore: {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
    strMod: number,
    dexMod: number,
    conMod: number,
    intMod: number,
    wisMod: number,
    chaMod: number
  };

  constructor() { }

  ngOnInit() {
    this.statStore = {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      strMod: 0,
      dexMod: 0,
      conMod: 0,
      intMod: 0,
      wisMod: 0,
      chaMod: 0
    };
  }

  updateStr(score: number) {
    this.statStore.str = score;
    this.statStore.strMod = Math.ceil((score - 10) / 2);
  }
  updateDex(score: number) {
    this.statStore.dex = score;
    this.statStore.dexMod = Math.ceil((score - 10) / 2);
  }
  updateCon(score: number) {
    this.statStore.con = score;
    this.statStore.conMod = Math.ceil((score - 10) / 2);
  }
  updateInt(score: number) {
    this.statStore.int = score;
    this.statStore.intMod = Math.ceil((score - 10) / 2);
  }
  updateWis(score: number) {
    this.statStore.wis = score;
    this.statStore.wisMod = Math.ceil((score - 10) / 2);
  }
  updateCha(score: number) {
    this.statStore.cha = score;
    this.statStore.chaMod = Math.ceil((score - 10) / 2);
  }

  blurAbility(ability: string, abilScore: any) {
    var score = Number(abilScore);
    if (ability === 'str') {
      this.updateStr(score);
    } else if (ability === 'dex') {
      this.updateDex(score);
    } else if (ability === 'con') {
      this.updateCon(score);
    } else if (ability === 'int') {
      this.updateInt(score);
    } else if (ability === 'wis') {
      this.updateWis(score);
    } else if (ability === 'cha') {
      this.updateCha(score);
    }
  }

}
