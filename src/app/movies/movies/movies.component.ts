import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  ) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data.movies;
      const mapCategories = this.movies.map(d => d.genres)
      this.categories = [...new Set(mapCategories)]
    })
    this.moviesService.getAllCategories().subscribe(data => this.allCategories = data.typesCategories);
  }

  addMovie() {
    const modalResult = this.modalService.open(AddMovieComponent, { backdrop: 'static', keyboard: false, windowClass: 'sm-modal' });
    modalResult.componentInstance.allCategories = this.allCategories;
    modalResult.componentInstance.exitsMoviesName = this.movies.map(m => m.name);
  }

  openLink(imdbLink) {
    window.open(imdbLink);
  }

  delete(id) {
    this.moviesService.deleteMovie(id).subscribe(data => this.movies = data)
  }
}
