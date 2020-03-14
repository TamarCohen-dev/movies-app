import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

    constructor(private http: HttpClient,
        private router: Router) { }

    getMovies() {
        return this.http.get<any>('api/movies');
    }

    getAllCategories() {
        return this.http.get<any>('api/categories');
    }

    deleteMovie(name) {
        return this.http.delete<any>(`api/movie/${name}`);
    }

    addMovie(movie) {
        return this.http.post<any>('api/movie', movie);
    }

    checkLink() {
        const httpOptions = {
            headers: new HttpHeaders({
                'accept': 'application/json',
                'Content-Type': 'application/json',
            })
        };
        return this.http.get<any>('http://www.imdb.com/title/tt2618986', httpOptions)
            .map(response => {
                response
            })
            .subscribe();
    }
}
