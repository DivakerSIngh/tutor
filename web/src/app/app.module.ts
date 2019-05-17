import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./modules/shared/shared.module";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './modules/shared/header/header.component';
import { LoginComponent } from './modules/common-pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './modules/common-pages/signup/signup.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,    
    FormsModule,
    MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
