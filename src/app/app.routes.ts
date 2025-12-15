import { Routes } from '@angular/router';
import { Login } from './core/components/login/login';
import { Dashboard } from './core/components/dashboard/dashboard';
import { CreateNewItems } from './pages/create-new-items/create-new-items';

export const routes: Routes = [
    { path: "login", component: Login, title: "Login"},
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path: "dashboard", component: Dashboard, title: "Dashboard"},
    { path: "create", component: CreateNewItems, title: "Create"},
];
