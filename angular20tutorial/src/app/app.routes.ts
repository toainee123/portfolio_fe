import { Routes } from '@angular/router';
import { HomePage } from './Client/home-page/home-page';
import { AdminDashboard } from './Admin/admin-dashboard/admin-dashboard';
import { LoginPage } from './Client/login-page/login-page';
import { Register } from './Client/register/register';
import { UserManagerment } from './Admin/user-managerment/user-managerment';
import { activeRouteGuard } from './activedRoute/active-route-guard';

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
        component: AdminDashboard,
        canActivate: [activeRouteGuard],
        children: [
            {
                path: 'users',
                component: UserManagerment
            }
        ]
    },
    {
        path: 'register',
        component: Register
    }
];
