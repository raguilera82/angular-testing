import { UserService } from './user.service';
import { Http } from '@angular/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  user: User;
  error: string;
  subs: Subscription;

  constructor(private service: UserService) { }

  search(username: string): void {
    this.user = null;
    this.error = null;
    this.subs = this.service.searchUserByUsername(username).subscribe(
      user => this.user = user,
      error => this.error = error
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
