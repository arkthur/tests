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
  private _allStories: Stories = [];

  constructor(private dataSvc: DataService) {
    this.selectedOption = localStorage.getItem('filter') ?? '';
  }

  ngOnInit() {
    this._getStories(this.selectedOption);
  }

  seeAll() {
    this.stories = this._allStories;
  }

  seeMyFaves() {
    const likes = JSON.parse(localStorage.getItem('likes') as string);
    this.stories = this._allStories.filter((s) => likes.includes(s.id));
  }

  async selectedSubject(subject: string) {
    await this._getStories(subject);
    this.defaultOption = 'All';
    localStorage.setItem('filter', subject);
  }

  private async _getStories(subject: string) {
    this.stories = await this.dataSvc.getStories(subject);
    this._allStories = this.stories;
  }
}
