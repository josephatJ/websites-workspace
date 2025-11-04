import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavigationBar } from './common/top-navigation-bar/top-navigation-bar';
import { TopNavMenuBar } from './common/top-nav-menu-bar/top-nav-menu-bar';
import { Footer } from './common/footer/footer';
import { SharedPagesService } from './shared/services/pages-state.service';
import { NgxHttpClientService } from '@websites-workspace/ngx-http-client-service';
import { map, switchMap } from 'rxjs';
import { orderBy } from 'lodash';

@Component({
  imports: [RouterModule, TopNavigationBar, TopNavMenuBar, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private pagesState = inject(SharedPagesService);
  protected title = 'general-website';
  private httpClient = inject(NgxHttpClientService);
  pages = this.pagesState.pages;

  ngOnInit(): void {
    this.httpClient
      .get(`items/subPages?fields=*`)
      .pipe(
        switchMap((subPagesResponse: any) =>
          this.pagesState.loadPages().pipe(
            map((pages: any) => {
              return {
                pages,
                subPages: subPagesResponse?.data,
              };
            })
          )
        )
      )
      .subscribe({
        next: (response) => {
          // console.log('response', response);
          let pages: any[] = response?.pages?.map((page: any) => {
            return {
              ...page,
              items: response?.subPages?.filter(
                (subPage: any) => subPage?.pageUuid === page?.id
              ),
            };
          });
          // console.log('pages', pages);
          this.pagesState.updatePages(orderBy(pages, ['order'], ['asc']));
        },
      });
  }
}
