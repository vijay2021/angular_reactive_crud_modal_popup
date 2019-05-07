import { Component, OnInit } from '@angular/core';
import { CheckdetailService } from './session/checkdetail.service';
import { Router, ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CheckdetailService]
})
export class AppComponent implements OnInit {
  title = 'angular';
  email:string;
  token:string;

  constructor(private checkdetailService:CheckdetailService,private route: ActivatedRoute){}

  ngOnInit(){

    this.route.queryParams.subscribe((params: Params) => {
          //console.log(params);
          if(params['login'] && localStorage.getItem('AccessUserPassword')){

            this.checkdetailService.signinUser(params['login'],params['token']).subscribe(
            val=>{
              console.log(val);
              // if(val){
              //   const getValue =  JSON.parse(val._body);
              //   localStorage.setItem('AccessUserEmail', getValue.AccessUserEmail);
              //   localStorage.setItem('AccessUserFullName', getValue.AccessUserFullName);
              //   localStorage.setItem('AccessUserLogin', getValue.AccessUserLogin);
              //   localStorage.setItem('AccessUserPassword', getValue.AccessUserPassword);
              // }
              // if(getValue =='1'){
              //     //this.router.navigate(['/users']);
              // }

            });
        }
    });

  }

}
