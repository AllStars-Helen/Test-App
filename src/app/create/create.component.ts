import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  addressbook = [];
  addressbookItem = {};
  fullNameText: string;
  addressText: string;
  noticeText: string;
  lng: number = 83.111594;
  lat: number = 54.858021;

  // maps

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  placeMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

  fullNameValidate() {
    // TODO
    return true;
  }

  addressValidate() {
    // TODO
    return true;
  }

  noticeValidate() {
    // TODO
    return true;
  }

  addNewAddress() {
    const fullNameIsValid = this.fullNameValidate();
    const addressIsValid = this.addressValidate();
    const noticeIsValid = this.noticeValidate();
    if (fullNameIsValid && addressIsValid && noticeIsValid) {
      this.saveAddress();
    }
  }

  saveAddress() {
    const id = (new Date()).toString();
    this.addressbookItem = {
      'addressId': id,
      'fullName': this.fullNameText,
      'address': this.addressText,
      'notice': this.noticeText,
      'lng': this.lng,
      'lat': this.lat
    };
    this.addressbook.push(this.addressbookItem);
    const newAddress = JSON.stringify(this.addressbookItem);
    localStorage.setItem(id, newAddress);
    this.router.navigate(['/list']);
  }
}
