import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { BasicProfileComponent } from './basic-profile/basic-profile.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';

@NgModule({
  declarations: [BasicProfileComponent, BecomeExpertComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule
  ]
})
export class ExpertModule { }
