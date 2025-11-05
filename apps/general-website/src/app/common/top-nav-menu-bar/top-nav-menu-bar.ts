import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SharedPagesService } from '../../shared/services/pages-state.service';
import { SharedGeneralServiceAndState } from '../../shared/services/general-state.service';
import { DomSanitizer } from '@angular/platform-browser';

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
  currentRoutePath = this.pagesStateService.currentPagePath;
  private generalStateService = inject(SharedGeneralServiceAndState);
  introduction = this.generalStateService.introduction;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.items = this.pages().map((page: any) => {
      return {
        label: page?.name,
        routerLink: page?.routePath ? page?.routePath : '/',
        command:
          page?.items?.length === 0
            ? () => {
                this.onChangeRoute(page?.routePath ? page?.routePath : '/');
              }
            : undefined,
        items:
          page?.items?.length === 0
            ? null
            : page?.items?.map((item: any) => {
                return {
                  label: item?.name,
                  command: () => {
                    this.onChangeRoute(
                      `${page?.routePath}/${item?.category}/${
                        item?.key ? item?.key : item?.id
                      }`
                    );
                  },
                };
              }),
      };
    });

    // [
    //   {
    //     label: 'Nyumbani',
    //     routerLink: '',
    //     routerLinkActiveOptions: {
    //       class: 'active-link',
    //     },
    //     command: () => {
    //       this.onChangeRoute('');
    //     },
    //   },
    //   {
    //     label: 'Kuhusu Mwenge',
    //     routerLink: 'about-us',
    //     routerLinkActiveOptions: {
    //       class: 'active-link',
    //     },
    //     command: () => {
    //       this.onChangeRoute('about-us');
    //     },
    //   },
    //   {
    //     label: 'Ibada na Masomo',
    //     routerLink: 'services',
    //     routerLinkActiveOptions: {
    //       class: 'active-link',
    //     },
    //     items: [
    //       {
    //         label: 'Ibada',
    //         routerLinkActiveOptions: {
    //           class: 'active-link',
    //         },
    //         command: () => {
    //           this.onChangeRoute('services/ibada');
    //         },
    //       },
    //       {
    //         label: 'Masomo',
    //         routerLinkActiveOptions: {
    //           class: 'active-link',
    //         },
    //         command: () => {
    //           this.onChangeRoute('services/masomo');
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     label: 'Idara na Miradi',
    //     routerLink: 'departments-and-projects',
    //     routerLinkActiveOptions: {
    //       class: 'active-link',
    //     },
    //     items: [
    //       {
    //         label: 'Idara ya Ustawi wa Jamii',
    //         routerLinkActiveOptions: {
    //           class: 'active-link',
    //         },
    //         command: () => {
    //           this.onChangeRoute('departments-and-projects/test');
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     label: 'Habari na Matukio',
    //     routerLink: 'events',
    //     routerLinkActiveOptions: {
    //       class: 'active-link',
    //     },
    //     command: () => {
    //       this.onChangeRoute('events');
    //     },
    //   },
    //   {
    //     label: 'Mawasiliano',
    //     routerLink: 'contacts',
    //     routerLinkActiveOptions: {
    //       class: 'active-link',
    //     },
    //     command: () => {
    //       this.onChangeRoute('contacts');
    //     },
    //   },
    // ];
  }

  sanitize(img: string) {
    return this.sanitizer.bypassSecurityTrustUrl(img);
  }

  onChangeRoute(path: string): void {
    this.pagesStateService.updateCurrentPagePath(path);
    this.router.navigate([path]);
  }
}
