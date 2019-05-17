import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit {
  teacherList: any = [];
  showVideo:boolean=false;
  noTeacherFound:boolean=false;
  constructor() { }

  ngOnInit() {


    var obj={image:'http://52.8.169.78:7112/images-view/1523625589173.jpg',firstName:'Divaker',lastName:'Singh',aboutMe:'The Auther',countryName:'India',timeZone:'IST',teachLanguage:'English'};
    this.teacherList.push(obj);
    var obj={image:'http://52.8.169.78:7112/images-view/1523625589173.jpg',firstName:'Divaker',lastName:'Singh',aboutMe:'The Auther',countryName:'India',timeZone:'IST',teachLanguage:'English'};
    this.teacherList.push(obj);
    var obj={image:'http://52.8.169.78:7112/images-view/1523625589173.jpg',firstName:'Divaker',lastName:'Singh',aboutMe:'The Auther',countryName:'India',timeZone:'IST',teachLanguage:'English'};
    this.teacherList.push(obj);
    var obj={image:'http://52.8.169.78:7112/images-view/1523625589173.jpg',firstName:'Divaker',lastName:'Singh',aboutMe:'The Auther',countryName:'India',timeZone:'IST',teachLanguage:'English'};
    this.teacherList.push(obj);
  }
  getDetailsofTeacher(evt,dom){

  }
}
