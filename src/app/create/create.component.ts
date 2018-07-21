import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    inputNameText: string = 'Mary';
    addressbookItem = [];
    addressbook = [];

  constructor() { }

  ngOnInit() {
  }

    addNewAddress(){
        this.addressbookItem.push(this.inputNameText);
        this.inputNameText = '';
        this.addressbook.push(this.addressbookItem);
    }

}
