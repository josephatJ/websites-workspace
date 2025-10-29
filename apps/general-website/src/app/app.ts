import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavigationBar } from './common/top-navigation-bar/top-navigation-bar';
import { TopNavMenuBar } from './common/top-nav-menu-bar/top-nav-menu-bar';
import { Footer } from './common/footer/footer';
import { SharedPagesService } from './shared/services/pages-state.service';

@Component({
  imports: [RouterModule, TopNavigationBar, TopNavMenuBar, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private pagesState = inject(SharedPagesService);
  protected title = 'general-website';

  ngOnInit(): void {
    this.pagesState.loadPages().subscribe({
      next: (pages) => this.pagesState.updatePages(pages),
      error: (err) => console.error(err.error),
    });
  }
}
