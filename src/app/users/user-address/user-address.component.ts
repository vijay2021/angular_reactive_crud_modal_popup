import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from '../users.service';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  usersAddress:any[];
  dataTable: any;
  constructor(private usersService:UsersService,private chRef: ChangeDetectorRef) { }

  ngOnInit() {

    this.usersService.getUsersAddressData()
    .subscribe((data:any)=> {
      this.usersAddress = data;
      this.chRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }

}
