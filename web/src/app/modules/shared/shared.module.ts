import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExpertFilterComponent } from './expert-filter/expert-filter.component';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [FooterComponent,ExpertFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule
  ],
  exports: [
    FooterComponent,ExpertFilterComponent
  ]
})
export class SharedModule { }
