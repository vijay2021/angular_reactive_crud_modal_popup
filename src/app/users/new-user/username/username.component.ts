import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  onButtonClick(username:string) {
    localStorage.setItem('usernameselected', username );
    this.activeModal.close('ModalClosed');
  }



  ngOnInit() {
  }

}
