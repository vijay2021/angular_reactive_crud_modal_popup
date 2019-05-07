import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { UserAddressComponent } from './users/user-address/user-address.component';


const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    // { path: 'new', component: UserEditComponent},
    // { path: ':id', component: UserDetailComponent },
    // { path: ':id/edit', component: UserEditComponent},
  ] }
  //{ path: 'userAddress', component: UserAddressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule {

}
