import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient,
        private router: Router) {
    }

    login(username: string, password: string) {
        return this.http.post<any>('api/user/authenticate', { username, password })
            .pipe(map(user => {
                return user;
            }));
    }
}
