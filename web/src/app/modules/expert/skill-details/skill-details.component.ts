import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  skillList:any=[];
  constructor() { 
    this.skillList.push({'Name':'Test','Description':'Test desc','Seats':'12'})
    this.skillList.push({'Name':'Test','Description':'Test desc','Seats':'12'})
    this.skillList.push({'Name':'Test','Description':'Test desc','Seats':'12'})
    this.skillList.push({'Name':'Test','Description':'Test desc','Seats':'12'})
    this.skillList.push({'Name':'Test','Description':'Test desc','Seats':'12'})
    this.skillList.push({'Name':'Test','Description':'Test desc','Seats':'12'})
    this.skillList.push({'Name':'Test','Description':'Test desc','Seats':'12'})
  }

  
  pageMode="add";
  courseList=[];
  length = 100;
  pageSize = 5;
  pageIndex=0;
  pageSizeOptions = [5, 10, 25, 100];
  pageNumber:number=0;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  myControl = new FormControl();
  frm = new FormGroup({
    //email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
   
    name: new FormControl('', [Validators.required]),
    seates: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    id: new FormControl('')
  })
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  edit(req,id){
    this.pageMode='update'
    this.frm.setValue({
      id:req.id,
      name: req.name,
      seates: req.seates,
      description: req.description,
    })
  }

  delete(req,id){
    
  }

 
  loadMore(evt){

    this.pageNumber=evt.pageIndex
    this.pageSize=evt.pageSize;
        this.getAll();
  }

  getAll(){
    
   
  }
  submit(){
  }
}
