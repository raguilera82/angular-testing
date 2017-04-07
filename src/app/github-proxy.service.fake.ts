import { USER_FAKE } from './../data/user';
import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class GithubProxyServiceFake {

  constructor() { }

  getUser(username: string): Observable<Response> {
    const responseOptions: ResponseOptions = new ResponseOptions();
    responseOptions.body = USER_FAKE;
    const response: Response = new Response(responseOptions);
    return Observable.of(response);
  }

}
