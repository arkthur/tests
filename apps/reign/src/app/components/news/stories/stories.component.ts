import { Component, Input, OnInit } from '@angular/core';

import { Stories } from '../../../models/story.model';

@Component({
  selector: 'tests-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  @Input() stories!: Stories;
  likes: string[] = [];

  ngOnInit() {
    this.likes = this._getLikes();
  }

  like(id: string | undefined) {
    if (id) {
      const likes = this._getLikes();
      let updatedLikes: string[];
      if (likes.includes(id)) {
        updatedLikes = likes.filter((likeId) => likeId !== id);
        this._setLikes(updatedLikes);
        this.likes = updatedLikes;
      } else {
        updatedLikes = [...likes, id];
        this._setLikes(updatedLikes);
        this.likes = updatedLikes;
      }
    }
  }

  private _getLikes(): string[] {
    return JSON.parse(localStorage.getItem('likes') as string);
  }

  private _setLikes(likes: string[]) {
    localStorage.setItem('likes', JSON.stringify(likes));
  }
}
