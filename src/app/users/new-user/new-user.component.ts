import { Component, OnInit,Input  } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { UsernameComponent } from './username/username.component';
import { MdDialog } from '@angular/material';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  idEditnew:any;
  newUser: FormGroup;
  editMode = false;
  id:number;
  clients: any[];
  params;
  AccessUserGroupOptions = ['1','2','3','4'];

  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal,private formBuilder: FormBuilder, private usersService:UsersService ) {
    this.createnewForm();

   }

   ngOnInit() {
     //console.log(this.idEdit);
     this.idEditnew = '';
     if(this.params.idEdit){
        this.idEditnew = this.params.idEdit;
      }
     //console.log(this.idEditnew);
     this.createnewForm();
   }


   checkusername() {

       const modalRef = this.modalService.open(UsernameComponent);

       modalRef.result.then((result) => {
         this.newUser.controls['AccessUserLogin'].setValue(localStorage.getItem("usernameselected"));
         localStorage.removeItem("usernameselected");
       }).catch((error) => {
         console.log(error);
       });


   }

  private createnewForm() {
    console.log(this.idEditnew);

    if(this.idEditnew && this.idEditnew>0){

      this.usersService.getUserData(this.idEditnew)
        .subscribe((data: any[]) => {
          //console.log(data.AccessUserLogin);
      this.newUser = this.formBuilder.group({
        AccessUserID: '',
        AccessUserGroup: [data.AccessUserGroup],
        AccessUserLogin: [data.AccessUserLogin, Validators.required],
        AccessUserFullName: [data.AccessUserFullName],
        AccessUserPassword: [data.AccessUserPassword, [Validators.required, Validators.minLength(6)]],
        AccessUserEmail: [data.AccessUserEmail, [Validators.required, Validators.email]],
        AccessUserStatus: [data.AccessUserStatus,Validators.required],
        AccessUserRegistered: [data.AccessUserRegistered]
      });

    });

    }else{
        this.newUser = this.formBuilder.group({
          AccessUserID: '',
          AccessUserGroup: [''],
          AccessUserLogin: ['', Validators.required],
          AccessUserFullName: [''],
          AccessUserPassword: ['', [Validators.required, Validators.minLength(6)]],
          AccessUserEmail: ['', [Validators.required, Validators.email]],
          AccessUserStatus: ['',Validators.required],
          AccessUserRegistered: [''],
          gender:['']
        });
    }

  }



  private submitForm() {
    //this.activeModal.close(this.newUser.value);
    this.submitted = true;

        // stop here if form is invalid
        if (this.newUser.invalid) {
            return;
        }

        if (this.idEditnew>0) {
          this.usersService.updateUserData(this.idEditnew, this.newUser.value).subscribe((data: any) => {
            //this.clients = data;
            console.log(data);
            if(data=='1'){
                this.activeModal.close('Modal Closed');
            }
          },
          (error: any) => {
              console.log(error)
          });
        } else {
          this.usersService.insertUserData(this.newUser.value).subscribe((data: any) => {
            //this.clients = data;
            if(data=='1'){
                this.activeModal.close('Modal Closed');
            }
          },
          (error: any) => {
              console.log(error)
          });
        }

        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newUser.value))
  }

  get f() { return this.newUser.controls; }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }




}
