import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  async getData(subject: string) {
    const res = await fetch(this._getURL(subject), { method: 'get' });
    const data = await res.json();
    console.log(data);
    return data;
  }

  private _getURL(subject: string): string {
    const query = subject ? `query=${subject}&` : '';
    return `https://hn.algolia.com/api/v1/search_by_date?${query}page=0`;
  }
}
