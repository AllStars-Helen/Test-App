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
  cityText: string;
  streetText: string;
  buildText: string;
  flatText: string;
  noticeText: string;

  constructor(private router: Router, private activRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activRoute.params.subscribe(params => this.loadAddress(params.id));
  }

  loadAddress(id) {
    const loadedAddress = localStorage.getItem(id);
    const addressArray = JSON.parse(loadedAddress);
    this.fullNameText = addressArray.fullName;
    this.cityText = addressArray.city;
    this.streetText = addressArray.street;
    this.buildText = addressArray.build;
    this.flatText = addressArray.flat;
    this.noticeText = addressArray.notice;
  }

  editAddress() {
    this.addressbookItem = {
      'fullName': this.fullNameText,
      'city': this.cityText,
      'street': this.streetText,
      'build': this.buildText,
      'flat': this.flatText,
      'notice': this.noticeText
    };
    const newAddress = JSON.stringify(this.addressbookItem);
    localStorage.setItem(this.fullNameText, newAddress);

    this.router.navigate(['/list']);
  }
}
