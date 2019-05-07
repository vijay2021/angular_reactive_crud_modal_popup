import { Component, OnInit,OnDestroy,Input, ChangeDetectorRef,Output } from '@angular/core';
import { CheckdetailService } from '../session/checkdetail.service';

import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';

import { UsersService } from './users.service';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  clients: any[];
  dataTable: any;
  //@Input() userid = new EventEmitter();
  //id:number;


  constructor(private router: Router,private location: Location,private modalService: NgbModal,private checkdetailService:CheckdetailService,private http: HttpClient, private chRef: ChangeDetectorRef,private usersService:UsersService) { }

  deleteUser(id:number){

    if(confirm("Are you absolutely sure you want to delete?")){
      this.usersService.deleteUser(id).subscribe((data:any)=>{

        console.log(data);
        if(data=='1'){
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["users"]));
        }
      },
      (error: any) => {
          console.log(error)
      });
    }


  }

  open(id:number) {
    // const modalRef = this.modalService.open(EditUserComponent);
    // modalRef.componentInstance.name = 'World';
      if(id>0){
        //this.userid.emit(id);
        const modalRef = this.modalService.open(NewUserComponent,{idEdit:id});
        modalRef.componentInstance.params = { 'idEdit':id};
      }else{
        const modalRef = this.modalService.open(NewUserComponent);
        modalRef.componentInstance.params = { 'idEdit':id};
      }
      //modalRef.componentInstance.idtest = id;
      // should be the id

      modalRef.result.then((result) => {
        //this.ngOnInit();
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["users"]));
        //location.reload();
        //this.chRef.detectChanges();
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
      //this.refreshData();


  }

  ngOnInit(){

        this.usersService.getUsersData()
          .subscribe((data: any[]) => {
            this.clients = data;

            // You'll have to wait that changeDetection occurs and projects data into
            // the HTML template, you can ask Angular to that for you ;-)
            this.chRef.detectChanges();

            // Now you can use jQuery DataTables :
            const table: any = $('table');
            this.dataTable = table.DataTable();
          });
}

  refreshData(){

    //alert('test');
    //$("#popup").dialog('open');
  }
}
