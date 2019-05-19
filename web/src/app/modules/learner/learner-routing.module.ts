import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertListComponent } from './expert-list/expert-list.component';
import { ProfileComponent } from './profile/profile.component';
import { LearnerTopicComponent } from './learner-topic/learner-topic.component';
import { LearnerNotificationComponent } from './setting/learner-notification/learner-notification.component';
import { FavouriteExpertComponent } from './profile/components/favourite-expert/favourite-expert.component';
import { PastTopicComponent } from './profile/components/past-topic/past-topic.component';
import { ScheduledTopicComponent } from './profile/components/scheduled-topic/scheduled-topic.component';
import { LearnerTopicTabsComponent } from './profile/components/learner-topic-tabs/learner-topic-tabs.component';
import { LearnerProfileHomeComponent } from './learner-profile-home/learner-profile-home.component';
import { UnscheduledTopicComponent } from './profile/components/unscheduled-topic/unscheduled-topic.component';
import { LearnerPasswordComponent } from './setting/learner-password/learner-password.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';

const routes: Routes = [
  //{ path:'', redirectTo:'list', component:ExpertListComponent },    
  { path:'list',  component:ExpertListComponent },
  // ,canActivate:[learnerGuard]
  { path:'profile', component:LearnerProfileHomeComponent,
      children : [
        { path:'', redirectTo : 'topic', component:LearnerTopicComponent }, 
        { path:'topic', component:LearnerTopicComponent,
          children : [
            { path:'', redirectTo : 'topic-views', component:ScheduledTopicComponent }, 
            { path:'topic-views', component:LearnerTopicTabsComponent,
              children : [
                { path:'', redirectTo : 'scheduled-topic', component:ScheduledTopicComponent }, 
                { path:'scheduled-topic', component:ScheduledTopicComponent },
                { path:'unscheduled-topic', component:UnscheduledTopicComponent},
                { path:'past-topic', component:PastTopicComponent },
                { path:'favourite-expert', component:FavouriteExpertComponent },
              ],
            }          
           
          ],
        },
        // { path:'classes', component:MyClassesComponent},
        { path: 'learner-notification', component: LearnerNotificationComponent},
        // { path:'learner-details/:id', component:learnerFullDetailsComponent}, 
        { path:'learner-password', component:LearnerPasswordComponent},
                
      ],
    },
    { path:'become-a-expert', component:BecomeExpertComponent},
    
 
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnerRoutingModule { }
