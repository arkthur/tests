import { Component, Input } from '@angular/core';

import { Story } from '../../../../models/story.model';

@Component({
  selector: 'tests-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  @Input() story: Story | null = null;
}
