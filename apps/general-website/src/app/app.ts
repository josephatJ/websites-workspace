import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavigationBar } from './common/top-navigation-bar/top-navigation-bar';
import { TopNavMenuBar } from './common/top-nav-menu-bar/top-nav-menu-bar';
import { Footer } from './common/footer/footer';
import { SharedPagesService } from './shared/services/pages-state.service';
import { map, switchMap, zip } from 'rxjs';
import { orderBy } from 'lodash';
import { SharedGeneralServiceAndState } from './shared/services/general-state.service';

@Component({
  imports: [RouterModule, TopNavigationBar, TopNavMenuBar, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private pagesState = inject(SharedPagesService);
  protected title = 'general-website';
  private generalStateService = inject(SharedGeneralServiceAndState);
  pages = this.pagesState.pages;

  ngOnInit(): void {
    zip(
      this.generalStateService.loadData(`items/subPages?fields=*`),
      this.generalStateService.loadData(`items/departments?fields=*`)
    )
      .pipe(
        switchMap((subPagesResponses: any) =>
          this.pagesState.loadPages().pipe(
            map((pages: any) => {
              return {
                pages,
                subPages: subPagesResponses[0],
                departments: subPagesResponses[1]?.map((dept: any) => {
                  return { ...dept, category: 'departments' };
                }),
              };
            })
          )
        )
      )
      .subscribe({
        next: (response) => {
          let pages: any[] = response?.pages?.map((page: any) => {
            return {
              ...page,
              items:
                page?.routePath?.indexOf('departments') === 0
                  ? response?.departments
                  : response?.subPages?.filter(
                      (subPage: any) => subPage?.pageUuid === page?.id
                    ),
            };
          });
          this.pagesState.updatePages(orderBy(pages, ['order'], ['asc']));
        },
      });

    this.generalStateService.loadData(`items/introduction`).subscribe({
      next: (introduction) => {
        this.generalStateService.updateIntroduction(introduction);
      },
    });
  }
}
