import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubProxyService {

  constructor(private http: Http) { }

  getUser(username: string): Observable<Response> {
    return this.http.get(`${environment.url}/${username}`);
  }

}
