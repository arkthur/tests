import { Component } from '@angular/core';

@Component({
  selector: 'tests-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  seeAll() {
    // TODO
  }

  seeMyFaves() {
    // TODO
  }

  selectedSubject(event: Event) {
    const value = ((event.target as unknown) as { value: string }).value;
    console.log(value);
  }
}
