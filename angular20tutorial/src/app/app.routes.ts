import { Routes } from '@angular/router';
import { HomePage } from './Client/home-page/home-page';
import { AdminDashboard } from './Admin/admin-dashboard/admin-dashboard';
import { LoginPage } from './Client/login-page/login-page';

export const routes: Routes = [

    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'admin',
        component: AdminDashboard
    }
];
