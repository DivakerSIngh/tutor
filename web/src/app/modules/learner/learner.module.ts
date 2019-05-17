import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnerRoutingModule } from './learner-routing.module';


import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpertFilterComponent } from '../shared/expert-filter/expert-filter.component';
import { ExpertListComponent } from './expert-list/expert-list.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ExpertListComponent],
  imports: [
    CommonModule,
    LearnerRoutingModule,
    MatButtonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule
  ]
})
export class LearnerModule { }
