import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,private httpNew: Http) { }

  // all users data
  getUsersData(){
    return this.http.get('https://yourwebserviceurl.com/frontService.php?userdetails');
  }

  //single user dataTable
  getUserData(userId:number){
    return this.http.get('https://yourwebserviceurl.com/frontService.php?userid='+userId);
  }

  insertUserData(usersData:String){
    //console.log(usersData);
  return this.http.post<any>('https://yourwebserviceurl.com/frontService.php?postuserdata',usersData,{responseType: 'JSON'});
  }


  updateUserData(id:number,usersData:String){
    //alert(id);
    return this.http.post<any>('https://yourwebserviceurl.com/frontService.php?postuserdata&postId='+id,usersData,{responseType: 'JSON'});
  }

  deleteUser(id:number){
    return this.http.post<any>('https://yourwebserviceurl.com/frontService.php?postuserdata&deleteId='+id,{responseType: 'JSON'});
  }

  // all users data
  getUsersAddressData(){
    return this.http.get('https://yourwebserviceurl.com/frontService.php?postuserAddress&getUserAddress');
  }

  //single user dataTable
  getUserAddressData(id:number){
    return this.http.get('https://yourwebserviceurl.com/frontService.php?postuserAddress&id='+id);
  }

  insertUserAddressData(userAddressData:String){
    //console.log(usersData);
  return this.http.post<any>('https://yourwebserviceurl.com/frontService.php?postuserAddress',userAddressData,{responseType: 'JSON'});
  }


  updateUserAddressData(id:number,userAddressData:String){
    //alert(id);
    return this.http.post<any>('https://yourwebserviceurl.com/frontService.php?postuserAddress&postId='+id,userAddressData,{responseType: 'JSON'});
  }

  deleteUserAddress(id:number){
    return this.http.post<any>('https://yourwebserviceurl.com/frontService.php?postuserAddress&deleteId='+id,{responseType: 'JSON'});
  }

}
