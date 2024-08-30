import { Routes } from '@angular/router';
import { RegistrComponent } from './pages/auth-page/registr/registr.component';
import { LoginComponent } from './pages/auth-page/login/login.component';


export const routes: Routes = [
    { path: 'auth/signup', component: RegistrComponent },
    { path: 'auth/signin', component: LoginComponent },
];
