import { GithubProxyService } from './github-proxy.service';
import { HttpModule } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { GithubProxyServiceFake } from './github-proxy.service.fake';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService,
        { provide: GithubProxyService, useClass: GithubProxyServiceFake }
      ]
    });
  });

  it('should search user by username', inject([UserService], (service: UserService) => {
    const username = 'raguilera82';
    service.searchUserByUsername(username).subscribe(
      user => expect(user.login).toEqual(username)
    );
  }));

});
