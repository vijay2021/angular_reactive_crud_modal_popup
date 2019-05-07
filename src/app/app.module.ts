import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './includes/header/header.component';
import { LeftComponent } from './includes/left/left.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HeadComponent } from './includes/head/head.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { NewUserComponent } from './users/new-user/new-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    LeftComponent,
    FooterComponent,
    HeadComponent,
    HomeComponent,
    EditUserComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    UsersModule
  ],
  entryComponents: [EditUserComponent,NewUserComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
