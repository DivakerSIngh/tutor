import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-expert',
  templateUrl: './favourite-expert.component.html',
  styleUrls: ['./favourite-expert.component.css']
})
export class FavouriteExpertComponent implements OnInit {
  favTeacherList: any = [];
  limit: number = 0;

  unfollowId: any;
  unfollowIndex: any;
  constructor() { }

  ngOnInit() {
  }

}
