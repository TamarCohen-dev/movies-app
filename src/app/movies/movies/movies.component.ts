import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies;
  categories;
  allCategories;
  constructor(private moviesService: MoviesService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(data => this.initData(data))
    this.moviesService.getAllCategories().subscribe(data => this.allCategories = data.typesCategories);
  }

  initData(data) {
    this.movies = data.movies;
    this.movies = _.orderBy(this.movies, 'createDate', 'desc');
    const mapCategories = this.movies.map(d => d.category)
    this.categories = [...new Set(mapCategories)]
  }

  addMovie() {
    const modalResult = this.modalService.open(AddMovieComponent, { backdrop: 'static', keyboard: false, windowClass: 'sm-modal' });
    modalResult.componentInstance.allCategories = this.allCategories;
    modalResult.componentInstance.exitsMoviesName = this.movies.map(m => m.name);
    modalResult.componentInstance.callback.subscribe(data => this.initData(data))
  }

  openLink(imdbLink) {
    window.open(imdbLink);
  }

  delete(name) {
    this.moviesService.deleteMovie(name).subscribe(data => this.initData(data))
  }

  logout() {
    this.router.navigate(['login']);
  }
}
