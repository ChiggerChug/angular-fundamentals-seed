import { Component } from "@angular/core";

@Component({
  selector: 'not-found',
  template:`
    <div>
      <h1>Page not found</h1>
      <a routerLink="/">Go home?</a>
    </div>
  `
})
export class NotFoundComponent{}