import { Component, Input } from '@angular/core';

import { Stories } from '../../../models/story.model';

@Component({
  selector: 'tests-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
  @Input() stories: Stories = [];
}
