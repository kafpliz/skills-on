import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimations(), NgxPaginationModule, provideTransloco({
    config: {
      availableLangs: ['ru'],
      defaultLang: 'ru',
      // Remove this option if your application doesn't support changing language in runtime.
      reRenderOnLangChange: true,
      prodMode: !isDevMode(),
    },  
    loader: TranslocoHttpLoader
  }),]
};
