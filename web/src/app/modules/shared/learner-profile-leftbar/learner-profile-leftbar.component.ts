import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-profile-leftbar',
  templateUrl: './learner-profile-leftbar.component.html',
  styleUrls: ['./learner-profile-leftbar.component.css']
})
export class LearnerProfileLeftbarComponent implements OnInit {

  userFullName :string='';
  userProfilePic :string='';
  email:string='';
  constructor() { }

  ngOnInit() {
  }

}
