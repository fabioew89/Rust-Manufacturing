import { Routes } from '@angular/router';
import { Login } from './core/components/login/login';
import { Dashboard } from './core/components/dashboard/dashboard';

export const routes: Routes = [
    { path: "login", component: Login, title: "Login"},
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path: "dashboard", component: Dashboard, title: "Dashboard"},
];
