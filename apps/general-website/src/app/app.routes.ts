import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then((c) => c.HomePage),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us-page/about-us-page').then((c) => c.AboutUsPage),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services-page/services-page').then((c) => c.ServicesPage),
  },
  {
    path: 'departments-and-projects',
    loadComponent: () =>
      import('./pages/departments-page/departments-page').then(
        (c) => c.DepartmentsPage
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./pages/events-page/events-page').then((c) => c.EventsPage),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./pages/contacts-page/contacts-page').then((c) => c.ContactsPage),
  },
];
