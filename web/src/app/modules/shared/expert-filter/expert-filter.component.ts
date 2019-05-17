import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expert-filter',
  templateUrl: './expert-filter.component.html',
  styleUrls: ['./expert-filter.component.css']
})
export class ExpertFilterComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;


  visibilityChanged: String = "hidden";
  constructor() { }

  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    setTimeout(() => {
      this.visibilityChanged = "shown";
    }, 200);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
onClickedOutside(Event) {
    console.log('Clicked outside');
  }
}
