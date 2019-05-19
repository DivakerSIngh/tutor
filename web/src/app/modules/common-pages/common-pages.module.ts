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
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule, MatSlideToggleModule, MatAccordion, MatExpansionPanelTitle, MatExpansionPanel
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecomdedExpertComponent } from './recomded-expert/recomded-expert.component';

import { SharedModule } from '../shared/shared.module';
import { BecomeExpertComponent } from './become-expert/become-expert.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [HomeComponent, RecomdedExpertComponent, BecomeExpertComponent],
  imports: [
    CommonPageRouterModule,   
    CommonModule,
    SlickCarouselModule,
    FormsModule,
    SharedModule,
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
