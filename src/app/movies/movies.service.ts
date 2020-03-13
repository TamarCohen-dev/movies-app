import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

    deleteMovie(id) {
        return this.http.delete<any>(`api/movies/${id}`);
    }
}
