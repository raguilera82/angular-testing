import { GithubProxyService } from './github-proxy.service';
import { HttpModule } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UserService, GithubProxyService]
    });
  });

  it('should search user by username', async(inject([UserService], (service: UserService) => {
    const username = 'raguilera82';
    service.searchUserByUsername(username).subscribe(
      user => expect(user.login).toEqual(username)
    );
  })));

});
