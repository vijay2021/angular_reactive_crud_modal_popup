import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute,Params } from "@angular/router";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  //@Input() name;
  //@Input idtest;
  myForm: FormGroup;


  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private route: ActivatedRoute) { this.createForm(); }

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }


  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
        console.log(params);
    });
  }

}
