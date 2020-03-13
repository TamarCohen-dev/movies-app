import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private router: Router) {
    router.navigate(['login']);
  }
}
