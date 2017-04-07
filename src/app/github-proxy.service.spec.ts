import { USER_FAKE } from './../data/user';
import { HttpModule, XHRBackend, Http, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';

import { GithubProxyService } from './github-proxy.service';

describe('GithubProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GithubProxyService,
        { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  beforeEach(async(() => {
    const backend = TestBed.get(XHRBackend);
    const service = new GithubProxyService(TestBed.get(Http));
    const options = new ResponseOptions({ body: USER_FAKE });
    const response = new Response(options);
    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(response)
    );
  }));

  it('should get user from github', async(inject([GithubProxyService], (service: GithubProxyService) => {
    const username = 'raguilera82';
    service.getUser(username).subscribe(
      response => expect(response.json().login).toEqual(username)
    );
  })));
});
