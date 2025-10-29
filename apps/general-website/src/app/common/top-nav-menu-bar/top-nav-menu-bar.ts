import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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

  ngOnInit(): void {
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
          command: () => {
            this.router.navigate(['']);
          },
        },
        {
          label: 'Kuhusu Mwenge',
          command: () => {
            this.router.navigate(['/about-us']);
          },
        },
        {
          label: 'Ibada na Huduma',
          command: () => {
            this.router.navigate(['/services']);
          },
        },
        {
          label: 'Idara na Miradi',
          command: () => {
            this.router.navigate(['/departments-and-projects']);
          },
        },
        {
          label: 'Habari na Matukio',
          command: () => {
            this.router.navigate(['/events']);
          },
        },
        {
          label: 'Mawasiliano',
          command: () => {
            this.router.navigate(['/contacts']);
          },
        },
      ];
  }

  onChangeRoute(event: Event, path: string): void {
    event.stopPropagation();
    this.router.navigate([path]);
  }
}
