import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ]
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;


  visibilityChanged: String = "hidden";
  slides = [
    {img: "http://smarthead.ancorathemes.com/wp-content/uploads/2017/01/slide1.jpg"},
    {img: "http://placehold.it/350x150/111111"},
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  constructor( private route: ActivatedRoute) {}

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
