import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CheckdetailService {

  constructor(private http: Http) { }


  signinUser(login:string,token:string){

    //output = "";
    //console.log(session);
    return this.http.get('https://yourservice.com/login/frontService.php?login='+login+'&token='+token)


      // .map(
      //   (response: Response) => {
      //     const output: number = response.json();
      //     //console.log(output);
      //
      //     return output;
      //   }
      // );


  }

  getUsers(){
      return this.http.get('https://yourservice.com/login/frontService.php?userdetails')
  }

}
