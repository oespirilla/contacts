import { Component, OnInit } from '@angular/core';
import { MediaQueryList } from '@angular/flex-layout';
import { NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px`);
  constructor(zone: NgZone) {

    this.mediaMatcher.addListener(mql => zone.run( () => this.mediaMatcher = mql) );
   }

  ngOnInit() {
  }

  isScreenSmall(): Boolean {
    return this.mediaMatcher.matches;
  }
}
