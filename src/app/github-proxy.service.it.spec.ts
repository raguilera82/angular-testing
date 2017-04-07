import { HttpModule } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';

import { GithubProxyService } from './github-proxy.service';

describe('GithubProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GithubProxyService]
    });
  });

  it('should get user from github', async(inject([GithubProxyService], (service: GithubProxyService) => {
    const username = 'raguilera82';
    service.getUser(username).subscribe(
      response => expect(response.json().login).toEqual(username)
    );
  })));
});
