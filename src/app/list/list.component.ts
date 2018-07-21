import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  addressbook = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0, len = localStorage.length; i < len; i++) {
      const key = localStorage.key(i);
      const value = localStorage[key];
      const item = JSON.parse(value);
      this.addressbook[i] = item;
    }
  }

}
