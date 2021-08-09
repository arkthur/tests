import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'tests-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  data: unknown;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this._getData('');
  }

  seeAll() {
    // TODO
  }

  seeMyFaves() {
    // TODO
  }

  async selectedSubject(subject: string) {
    await this._getData(subject);
  }

  private async _getData(subject: string) {
    this.data = await this.dataSvc.getData(subject);
  }
}
