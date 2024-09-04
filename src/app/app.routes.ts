import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/auth-page/components/register/register.component';
import { LoginComponent } from './pages/auth-page/components/login/login.component';
import { ERoutes } from "./shared/enums/routes.enum";
import { AuthPageComponent } from "./pages/auth-page/auth-page.component";

import {
  RegisterFormComponent
} from "./pages/auth-page/components/register/components/register-form/register-form.component";
import {
  EmailConfirmComponent
} from "./pages/auth-page/components/register/components/email-confirm/email-confirm.component";
import { SelectComponent } from './pages/auth-page/components/register/components/select/select.component';

export const routes: Routes = [
  {
    path: ERoutes.AUTH, component: AuthPageComponent,
    children: [
      {
        path: '',
        redirectTo: ERoutes.REGISTER,
        pathMatch: 'full',
      },
      {
        path: ERoutes.REGISTER,
        component: RegisterComponent,
        children: [
          {
            path: '',
            component: RegisterFormComponent
          },
          {
            path: ERoutes.CONFIRM,
            component: EmailConfirmComponent
          },
          {
            path: ERoutes.SELECT,
            component: SelectComponent
          },
        ]
      },
      {
        path: ERoutes.LOGIN,
        component: LoginComponent
      },

    ]
  }
];
