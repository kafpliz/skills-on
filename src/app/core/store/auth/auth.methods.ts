import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { firstValueFrom, pipe, switchMap, tap } from 'rxjs';

import { IInterest } from '../../../data/interfaces/interest.interface';
import { ILoginBody } from '../../../data/interfaces/login-body.interface';
import { AuthService } from '../../services/auth/auth.service';
import { AuthState } from './auth.store';

export function withAuthMethods<_>() {
  return signalStoreFeature(
    { state: type<AuthState>() },
    withMethods((state, authService = inject(AuthService)) => {
      return {
        login: rxMethod<ILoginBody>(
          pipe(
            tap(() =>
              patchState(state, { isLoading: true, errorMessage: null })
            ),
            switchMap(body => {
              return authService.login(body).pipe(
                tapResponse({
                  next: ({ access, refresh }) =>
                    patchState(state, { access, refresh, isLoading: false }),
                  error: (err: HttpErrorResponse) => {
                    patchState(state, {
                      isLoading: false,
                      errorMessage: err.error.detail,
                    });
                  },
                })
              );
            })
          )
        ),
        isSelected(interest: IInterest) {
          return state.selectedInterests().includes(interest);
        },
        getTokensFromCookies: () => {
          const data = authService.getTokensFromCookies();
          patchState(state, { ...data });
        },
        async setInterests() {
          patchState(state, { isLoading: true });
          const data = await firstValueFrom(authService.getInterests());
          console.log(data);
          patchState(state, { isLoading: false, interests: [...data] });
        },
        addInterest(interest: IInterest) {
          patchState(state, {
            selectedInterests: [...state.selectedInterests(), interest],
          });
        },
        removeInterest(interest: IInterest) {
          patchState(state, {
            selectedInterests: state
              .selectedInterests()
              .filter(v => v.id !== interest.id),
          });
        },
        sendInterests: rxMethod(
          pipe(
            tap(() => patchState(state, { isLoading: true })),
            switchMap(() => {
              return authService.sendInterests(state.selectedInterests()).pipe(
                tapResponse({
                  next: () => {
                    patchState(state, { isLoading: false });
                  },
                  error: (err: HttpErrorResponse) => {
                    patchState(state, {
                      isLoading: false,
                      errorMessage: err.error.detail,
                    });
                  },
                })
              );
            })
          )
        ),
      };
    })
  );
}
