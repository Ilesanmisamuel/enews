import {Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';

declare var google;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterContentInit, OnInit {
  todo = {}
  logForm() {
    console.log(this.todo)
  }
  map;
  @ViewChild('mapElement') mapElement;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: 43.1566, lng: -77.6088},
          zoom: 10
        });
  }
}
