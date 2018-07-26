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
      const storageItem = JSON.parse(value);
      this.addressbook[i] = storageItem;
    }
  }

  myFunction() {
    // TODO
  }

  deleteAddress(address) {
    const confirmation = confirm('Do you really want to delete this address?');
    if (confirmation) {
      localStorage.removeItem(address.addressId);
      const index = this.addressbook.indexOf(address);
      this.addressbook.splice(index, 1);
    }
  }

}
