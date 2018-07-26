import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  addressbookItem = {};
  fullNameText: string;
  addressText: string;
  noticeText: string;
  lng: number;
  lat: number;

  constructor(private router: Router, private activRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activRoute.params.subscribe(params => this.loadAddress(params.id));
  }

  placeMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

  loadAddress(id) {
    const loadedAddress = localStorage.getItem(id);
    const addressArray = JSON.parse(loadedAddress);
    this.fullNameText = addressArray.fullName;
    this.addressText = addressArray.address;
    this.noticeText = addressArray.notice;
    this.lng = addressArray.lng;
    this.lat = addressArray.lat;
  }

  editAddress() {
    this.addressbookItem = {
      'fullName': this.fullNameText,
      'address': this.addressText,
      'notice': this.noticeText,
      'lng': this.lng,
      'lat': this.lat
    };
    const newAddress = JSON.stringify(this.addressbookItem);
    localStorage.setItem(this.fullNameText, newAddress);

    this.router.navigate(['/list']);
  }
}
