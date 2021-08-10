import { Injectable } from '@angular/core';

import { Stories, Story, StoryHits } from '../models/story.model';

interface Data {
  hits: StoryHits;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  async getStories(subject: string) {
    const data = await this._getData(subject);
    const stories = this._dataToStories(data);
    return stories;
  }

  private async _getData(subject: string): Promise<Data> {
    const res = await fetch(this._getURL(subject), { method: 'get' });
    const data = (await res.json()) as Data;
    return data;
  }

  private _getURL(subject: string): string {
    const query = subject ? `query=${subject}&` : '';
    return `https://hn.algolia.com/api/v1/search_by_date?${query}page=0`;
  }

  private _dataToStories(data: Data): Stories {
    return this._filterMissingDataStories(data.hits).map<Story>((s) => new Story(s));
  }

  private _filterMissingDataStories(hits: StoryHits): StoryHits {
    return hits.filter(
      ({ story_id, story_title, story_url, author, created_at }) =>
        story_id && story_title && story_url && author && created_at
    );
  }
}
