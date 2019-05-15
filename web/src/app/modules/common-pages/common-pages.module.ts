import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { CommonPageRouterModule } from './common-routing';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonPageRouterModule,
   
    CommonModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule
  ]
})
export class CommonPagesModule { }
