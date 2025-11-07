import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import GeneralWebsitePreset from '../general-preset';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxHttpClientService } from '@websites-workspace/ngx-http-client-service';
import { provideAnimations } from '@angular/platform-browser/animations';
// export function initApp(service: NgxHttpClientService) {
//   return () => service.init();
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideAnimations(),
    provideAppInitializer(() => {
      const svc = inject(NgxHttpClientService);
      return svc.init();
    }),
    provideRouter(appRoutes),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    providePrimeNG({
      theme: {
        preset: GeneralWebsitePreset,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
};
