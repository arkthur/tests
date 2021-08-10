import { Component, OnInit } from '@angular/core';

import { Stories } from '../../models/story.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'tests-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  defaultOption = 'Select your news';
  selectedOption: string;
  stories: Stories = [];
  pagesCount = 0;
  selectedPageIndex = 0;
  paginatorReady = false;
  private _allStories: Stories = [];

  constructor(private dataSvc: DataService) {
    this.selectedOption = localStorage.getItem('filter') ?? '';
  }

  ngOnInit() {
    this._getStories(this.selectedOption, this.selectedPageIndex);
  }

  seeAll() {
    this.stories = this._allStories;
  }

  seeMyFaves() {
    const likes = JSON.parse(localStorage.getItem('likes') as string);
    this.stories = this._allStories.filter((s) => likes.includes(s.id));
  }

  async changeSubject(subject: string) {
    await this._getStories(subject, this.selectedPageIndex);
    this.defaultOption = 'All';
    localStorage.setItem('filter', subject);
    this.selectedOption = subject;
  }

  async changePage(index: number) {
    await this._getStories(this.selectedOption, index);
    this.selectedPageIndex = index;
  }

  private async _getStories(subject: string, page: number) {
    const dataStories = await this.dataSvc.getStories(subject, page);
    this.stories = dataStories.stories;
    this.pagesCount = dataStories.pagesCount;
    this.paginatorReady = true;
    this._allStories = this.stories;
  }
}
