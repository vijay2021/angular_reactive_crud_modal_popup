export class Users{

    public AccessUserLogin: string;
    public AccessUserFullName: string;
    public AccessUserPassword: string;
    public AccessUserEmail: string;
    public AccessUserRegistered: string;


    constructor(AccessUserLogin:string,AccessUserFullName:string,AccessUserPassword:string,AccessUserEmail:string,AccessUserRegistered:string){
      this.AccessUserLogin = AccessUserLogin;
      this.AccessUserFullName = AccessUserFullName;
      this.AccessUserPassword = AccessUserPassword;
      this.AccessUserEmail = AccessUserEmail;
      this.AccessUserRegistered = AccessUserRegistered;
    }

}
