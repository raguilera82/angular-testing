import { Http } from '@angular/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  user: any;
  error: string;
  subs: Subscription;

  constructor(private http: Http) { }

  search(username: string): void {
    this.user = null;
    this.error = null;
    this.subs = this.http.get(`https://api.github.com/users/${username}`)
      .subscribe(
      (response) => this.user = response.json(),
      (error) => this.error = error
      );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}