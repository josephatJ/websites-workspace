import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SharedPagesService } from '../../shared/services/pages-state.service';

@Component({
  selector: 'app-top-nav-menu-bar',
  imports: [CommonModule, MegaMenuModule, MenuModule, MenubarModule],
  templateUrl: './top-nav-menu-bar.html',
  styleUrl: './top-nav-menu-bar.css',
})
export class TopNavMenuBar implements OnInit {
  private router = inject(Router);
  items: MenuItem[] | undefined;
  private pagesStateService = inject(SharedPagesService);
  pages = this.pagesStateService.pages;
  currentRoutePath = signal<string>('');

  ngOnInit(): void {
    this.currentRoutePath.set(localStorage.getItem('currentRoute') as string);
    this.items =
      // this.pages().map((page: any) => {
      //   return {
      //     label: page?.name,
      //     command: () => {
      //       this.router.navigate([page?.routePath]);
      //     },
      //   };
      // });

      [
        {
          label: 'Nyumbani',
          routerLink: '',
          routerLinkActiveOptions: {
            class: 'active-link',
          },
          command: () => {
            this.onChangeRoute('');
          },
        },
        {
          label: 'Kuhusu Mwenge',
          routerLink: 'about-us',
          routerLinkActiveOptions: {
            class: 'active-link',
          },
          command: () => {
            this.onChangeRoute('about-us');
          },
        },
        {
          label: 'Ibada na Masomo',
          routerLink: 'services',
          routerLinkActiveOptions: {
            class: 'active-link',
          },
          items: [
            {
              label: 'Ibada',
              routerLinkActiveOptions: {
                class: 'active-link',
              },
              command: () => {
                this.onChangeRoute('services/ibada');
              },
            },
            {
              label: 'Masomo',
              routerLinkActiveOptions: {
                class: 'active-link',
              },
              command: () => {
                this.onChangeRoute('services/masomo');
              },
            },
          ],
        },
        {
          label: 'Idara na Miradi',
          routerLink: 'departments-and-projects',
          routerLinkActiveOptions: {
            class: 'active-link',
          },
          // command: () => {
          //   this.router.navigate(['/departments-and-projects']);
          // },
          items: [
            {
              label: 'Idara ya Ustawi wa Jamii',
              routerLinkActiveOptions: {
                class: 'active-link',
              },
              command: () => {
                this.onChangeRoute('departments-and-projects/test');
              },
            },
          ],
        },
        {
          label: 'Habari na Matukio',
          routerLink: 'events',
          routerLinkActiveOptions: {
            class: 'active-link',
          },
          command: () => {
            this.onChangeRoute('events');
          },
        },
        {
          label: 'Mawasiliano',
          routerLink: 'contacts',
          routerLinkActiveOptions: {
            class: 'active-link',
          },
          command: () => {
            this.onChangeRoute('contacts');
          },
        },
      ];
  }

  onChangeRoute(path: string): void {
    this.currentRoutePath.set(path);
    localStorage.setItem('currentRoute', path);
    this.router.navigate([path]);
  }
}
