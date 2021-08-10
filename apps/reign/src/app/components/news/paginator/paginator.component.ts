import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Page {
  index: number;
  name: string;
}

@Component({
  selector: 'tests-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() pagesCount!: number;
  @Output() changingPage = new EventEmitter<number>();
  pages: Page[] = [];
  activePageIndex = 0;
  ready = false;

  ngOnInit() {
    this._regeneratePages();
    this.ready = true;
  }

  openFirst() {
    this.openPage(0);
  }

  openPrevious() {
    this.openPage(this.activePageIndex - 1);
  }

  openPage(index: number) {
    this.activePageIndex = index;
    this.changingPage.emit(index);
    this._regeneratePages();
  }

  openNext() {
    this.openPage(this.activePageIndex + 1);
  }

  openLast() {
    this.openPage(this.pagesCount - 1);
  }

  private _regeneratePages() {
    const pages: Page[] = [];
    for (
      let i =
        this.activePageIndex > this.pagesCount - 3 ? this.pagesCount - 5 : Math.max(0, this.activePageIndex - 2);
      i < (this.activePageIndex < 2 ? 5 : Math.min(this.pagesCount, this.activePageIndex + 3));
      i++
    ) {
      pages.push({ index: i, name: `${i + 1}` });
    }
    this.pages = pages;
  }
}
