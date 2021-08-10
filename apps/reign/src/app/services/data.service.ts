import { Injectable } from '@angular/core';

import { Stories, Story, StoryHits } from '../models/story.model';

interface Data {
  hits: StoryHits;
  nbPages: number;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  async getStories(
    subject: string,
    page: number
  ): Promise<{ stories: Stories; pagesCount: number }> {
    const data = await this._getData(subject, page);
    const stories = this._dataToStories(data);
    return { stories, pagesCount: data.nbPages };
  }

  private async _getData(subject: string, page: number): Promise<Data> {
    const res = await fetch(this._getURL(subject, page), { method: 'get' });
    const data = (await res.json()) as Data;
    return data;
  }

  private _getURL(subject: string, page: number): string {
    const query = subject ? `query=${subject}&` : '';
    return `https://hn.algolia.com/api/v1/search_by_date?${query}page=${page}`;
  }

  private _dataToStories(data: Data): Stories {
    return this._filterMissingDataStories(data.hits).map<Story>(
      (s) => new Story(s)
    );
  }

  private _filterMissingDataStories(hits: StoryHits): StoryHits {
    return hits.filter(
      ({ story_id, story_title, story_url, author, created_at }) =>
        story_id && story_title && story_url && author && created_at
    );
  }
}
