import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header'; 

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class MainLayoutComponent {}