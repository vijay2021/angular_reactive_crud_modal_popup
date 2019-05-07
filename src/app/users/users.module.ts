import { NgModule } from '@angular/core';
import { MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsernameComponent } from './new-user/username/username.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { AddEditUserAddressComponent } from './user-address/add-edit-user-address/add-edit-user-address.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  entryComponents: [UsernameComponent],
  providers: [ MatDatepickerModule ],
  declarations: [UsernameComponent, UserAddressComponent, AddEditUserAddressComponent],
})

export class UsersModule {}
