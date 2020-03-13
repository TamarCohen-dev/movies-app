import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviesService } from './movies.service';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    { path: '', component: MoviesComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NgbModule
    ],
    exports: [RouterModule],
    providers: [MoviesService],
    declarations: [MoviesComponent, AddMovieComponent],
    entryComponents: [AddMovieComponent]
})
export class MoviesModule {
}
