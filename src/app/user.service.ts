import { User } from './user';
import { GithubProxyService } from './github-proxy.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private proxy: GithubProxyService) { }

  searchUserByUsername(username: string): Observable<User> {
    return this.proxy.getUser(username).map(
      response => this.convertToUser(response.json())
    );
  }

  private convertToUser(json: any) {
    return new User(json.login, json.name, json.avatar_url, json.site_admin);
  }

}
