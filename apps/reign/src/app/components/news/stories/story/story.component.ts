import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Story } from '../../../../models/story.model';

@Component({
  selector: 'tests-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  @Input() story!: Story;
  @Input() liked!: boolean;
  @Output() liking = new EventEmitter<string>()
  imgNotLiked = '../../../../../assets/iconmonstr-favorite-2.svg';
  imgLiked = '../../../../../assets/iconmonstr-favorite-3.svg';

  openURL(url: string | undefined) {
    window.open(url);
  }

  like() {
    this.liking.emit(this.story.id);
  }
}
