import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

export class UserServiceFake {

  constructor() { }

  searchUserByUsername(username: string): Observable<User> {
    if (username === 'notfound') {
      return Observable.throw('User not found');
    }else {
      return Observable.of(new User('raguilera82', 'Rubén Aguilera', 'http://image', false));
    }
  }

}
