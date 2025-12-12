import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Dashboard } from './core/components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rust');

  constructor(private router: Router) {}

  isLoginRoute() {
    if (this.router.url === "login") {
      return true
    } else {
      return false
    }
  }
}
