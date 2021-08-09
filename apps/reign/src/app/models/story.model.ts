export interface StoryModel {
  story_id: number;
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
}

export type StoryHits = StoryModel[];

export type Stories = Story[];

export class Story {
  id: string;
  author: string;
  title: string;
  url: string;
  creationDate: Date;

  constructor(model: StoryModel) {
    this.id = `${model.story_id}`;
    this.author = model.author;
    this.title = model.story_title;
    this.url = model.story_url;
    this.creationDate = new Date(model.created_at);
  }
}
