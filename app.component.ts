import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginUser;
  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      this.loginUser = "";
      if (sessionStorage.getItem('currentUser')) {
        this.loginUser = JSON.parse(sessionStorage.getItem('currentUser'));
      }
    });
  }
  ngOnInit() {}
}
