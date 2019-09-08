import { Component } from '@angular/core';

import { setViewport } from './viewport';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ideablast';

  constructor(){

    setViewport();
  }
}
