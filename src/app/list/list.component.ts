import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  addressbook = [];
  addressbookItem = {};
  fullNameText: string;
  cityText: string;
  streetText: string;
  buildText: string;
  flatText: string;

  constructor() {
  }

  ngOnInit() {
  }

  addNewAddress() {
    this.addressbookItem = {
      'fullName' : this.fullNameText,
      'city' : this.cityText,
      'street' : this.streetText,
      'build' : this.buildText,
      'flat' : this.flatText
    };

    this.addressbook.push(this.addressbookItem);
    const newAddress = JSON.stringify(this.addressbookItem);
    localStorage.setItem(this.fullNameText, newAddress);

    // clear all fields
    this.fullNameText = '';
    this.cityText = '';
    this.streetText = '';
    this.buildText = '';
    this.flatText = '';
  }
}
