import { Routes } from '@angular/router';
import { HomePage } from './Client/home-page/home-page';
import { AdminDashboard } from './Admin/admin-dashboard/admin-dashboard';
import { LoginPage } from './Client/login-page/login-page';
import { Register } from './Client/register/register';
import { UserManagerment } from './Admin/user-managerment/user-managerment';
import { activeRouteGuard } from './activedRoute/active-route-guard';
import { ExpMaangerment } from './Admin/exp-maangerment/exp-maangerment';
import { Chart } from './components/Chart/chart/chart';
import { Projects } from './Admin/projects/projects';
import { Skills } from './Admin/skills/skills';
import { Education } from './Admin/education/education';

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
                path: 'dashboard',
                component: Chart // trang chứa <app-chart>
            },
            {
                path: 'users',
                component: UserManagerment
            },
            {
                path: 'experiences',
                component: ExpMaangerment
            },
            {
                path: 'projects',
                component: Projects
            },
            {
                path: 'skills',
                component: Skills
            },
            {
                path: 'education',
                component: Education
            },
            {
                path: '**',
                redirectTo: 'admin/dashboard'
            }
        ]
    },
    {
        path: 'register',
        component: Register
    }
];
