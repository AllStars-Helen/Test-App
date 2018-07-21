import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  addressbook = [];
  addressbookItem = {};
  fullNameText: string;
  cityText: string;
  streetText: string;
  buildText: string;
  flatText: string;
  // TODO add a comment textarea

  constructor(private router: Router) {
  }

  ngOnInit() {
    // TODO validator
  }

  addNewAddress() {
    this.addressbookItem = {
      'fullName': this.fullNameText,
      'city': this.cityText,
      'street': this.streetText,
      'build': this.buildText,
      'flat': this.flatText
    };

    this.addressbook.push(this.addressbookItem);
    const newAddress = JSON.stringify(this.addressbookItem);
    // TODO change fullName to id
    localStorage.setItem(this.fullNameText, newAddress);

    // clear all fields
    this.fullNameText = '';
    this.cityText = '';
    this.streetText = '';
    this.buildText = '';
    this.flatText = '';

    this.router.navigate(['/list']);
  }
}
