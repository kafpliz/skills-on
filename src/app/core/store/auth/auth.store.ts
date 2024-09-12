import { computed } from '@angular/core';
import { signalStore, withComputed, withHooks, withState } from '@ngrx/signals';

import { IInterest } from '../../../data/interfaces/interest.interface';
import { withAuthMethods } from './auth.methods';

export interface AuthState {
  access: string | null;
  refresh: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isRegisterInProgress: boolean;
  interests: IInterest[];
  selectedInterests: IInterest[];
}

const initialState: AuthState = {
  access: null,
  refresh: null,
  isLoading: false,
  interests: [],
  selectedInterests: [],
  errorMessage: null,
  isRegisterInProgress: false,
};

export const AuthStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialState),
  withAuthMethods(),
  withComputed(({ access, refresh, selectedInterests }) => {
    return {
      isAuthenticated: computed(() => !!access() && !!refresh()),
      isInterestsCount: computed(() => selectedInterests().length >= 3),
    };
  }),
  withHooks({
    onInit({ getTokensFromCookies }) {
      getTokensFromCookies();
    },
  })
);
