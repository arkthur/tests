import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { PaginatorComponent } from './components/news/paginator/paginator.component';
import { StoriesComponent } from './components/news/stories/stories.component';
import { StoryComponent } from './components/news/stories/story/story.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NewsComponent, StoriesComponent, StoryComponent, TimeAgoPipe, PaginatorComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
