import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tests-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const likes = localStorage.getItem('likes');
    if (likes === null) localStorage.setItem('likes', JSON.stringify([]));
  }
}
