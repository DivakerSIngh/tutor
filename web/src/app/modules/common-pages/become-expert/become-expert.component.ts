import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-become-expert',
  templateUrl: './become-expert.component.html',
  styleUrls: ['./become-expert.component.css']
})
export class BecomeExpertComponent implements OnInit {

  
  signupPopup: NgbModalRef;
  registrationResponse: string = '';

  dynamicFormControl: any;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  loginType: '3';
  isSocialSignup: boolean = false;
  varificationLink:string='';
  isEmailFalse:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  becomeExpert(){
    
  }

}
