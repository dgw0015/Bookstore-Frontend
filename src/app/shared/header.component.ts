import { Component, OnInit } from '@angular/core';


@Component({
   selector: 'app-header',
   template: `
      <div class="topBanner">
         <h1 class="display-3">Auburn Bookstore</h1>
         <hr>
      </div>
      <a target="_blank" href="http://www.auburn.edu/">
         <img [src]="auLogo" class="logo" alt="Auburn University Logo" />
      </a>
      <img [src]="background" class="sharedBg" alt="the books on shelves in a library" />
   `,
   styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit  {
   background: string;
   auLogo: string;

   constructor() {
      this.background = './assets/images/libraryBooks.png';
      this.auLogo = './assets/images/auburnLogo.png';
   }

   ngOnInit() {
   }

}
