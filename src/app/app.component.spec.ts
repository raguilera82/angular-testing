import { UserServiceFake } from './user.service.fake';
import { UserService } from './user.service';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let fixture, app;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: UserService, useClass: UserServiceFake }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
    }));

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it(`should search user ok`, async(() => {
        const username = 'raguilera82';
        app.search(username);
        expect(app.user.login).toEqual(username);
    }));

    it(`should search user ko`, async(() => {
        const username = 'notfound';
        app.search(username);
        expect(app.error).toBeDefined();
    }));

});
