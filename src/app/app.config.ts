import { ApplicationConfig, PLATFORM_ID, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { isPlatformBrowser } from '@angular/common';
import { selectedLanguageIndex } from './core/utils/language-pack';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { userFeature } from './state/user/user.reducer';
import { loadingFeature } from './state/loading/loading.reduce';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { effects } from './state/app.effects';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature),
    provideClientHydration(),
    provideStore(),
    provideEffects(effects),
    provideState(userFeature),
    provideState(loadingFeature),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: (platformId: Object) => {
        return () => {
          if (isPlatformBrowser(platformId)) {
            const storedIndex = localStorage.getItem('selectedLanguageIndex');
            if (storedIndex !== null && storedIndex !== '0') {
              selectedLanguageIndex.set(parseInt(storedIndex, 10));
            } else {
              selectedLanguageIndex.set(1);
            }
          }
        };
      },
      deps: [PLATFORM_ID],
      multi: true,
    },
    provideAnimationsAsync(),

  ],
};
