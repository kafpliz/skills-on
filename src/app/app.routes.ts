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
import { SuccessfullyComponent } from './pages/auth-page/components/successfully/successfully.component';
import { MainComponent } from './pages/main/main.component';
import { ResetPasswordComponent } from './pages/auth-page/components/reset-password/reset-password.component';

import { SendCodeComponent } from './pages/auth-page/components/reset-password/components/send-code/send-code.component';
import { ConfirmPasswordComponent } from './pages/auth-page/components/reset-password/components/confirm-password/confirm-password.component';
import { UpdatePasswordComponent } from './pages/auth-page/components/reset-password/components/update-password/update-password.component';

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
          {
            path: ERoutes.SUCCESSFULLY,
            component: SuccessfullyComponent
          },
        ]
      },
      {
        path: ERoutes.LOGIN,
        component: LoginComponent
      },
      {
        path: ERoutes.RESET_PASSWORD,
        component: ResetPasswordComponent,
        children: [
          {path: '', redirectTo: ERoutes.SEND, pathMatch: 'full'},
          {path: ERoutes.SEND, component: SendCodeComponent},
          {path: ERoutes.CONFIRM, component: ConfirmPasswordComponent},
          {path: ERoutes.UPDATE, component: UpdatePasswordComponent},
          {path: ERoutes.SUCCESSFULLY, component: SuccessfullyComponent},
        ]
      },


    ]
  },
  { path: ERoutes.HOME, component: MainComponent },

];
