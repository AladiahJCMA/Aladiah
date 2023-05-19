import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navbarEnter(event: EventTarget | null): void {
    console.log("Enter");
    /* (<HTMLDivElement>event).classList; */
  }

  navbarLeave(): void {
    console.log("Leave");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/