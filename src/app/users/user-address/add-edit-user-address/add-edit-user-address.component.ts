import { Component, OnInit } from '@angular/core';
//import { UserAddress } from './user-address.model';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-add-edit-user-address',
  templateUrl: './add-edit-user-address.component.html',
  styleUrls: ['./add-edit-user-address.component.css']
})
export class AddEditUserAddressComponent implements OnInit {

  recordId:number;
  submitted:false;

  constructor() { }

  ngOnInit() {
  }

    //userAddress = new UserAddress();
    // if(this.recordId>0){
    //
    // }else{
    //
    // }
}
