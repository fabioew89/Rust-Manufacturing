import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Create } from './pages/create/create';

export const routes: Routes = [
    { path: "login", component: Login, title: "Login"},
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path: "dashboard", component: Dashboard, title: "Dashboard"},
    { path: "create", component: Create, title: "Create"},
];
