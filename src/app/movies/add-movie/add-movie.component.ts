import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() allCategories: string[];
  @Input() exitsMoviesName: string[];
  @Output() callback = new EventEmitter();
  form: FormGroup;
  submitted = false;
  message;

  constructor(private fb: FormBuilder,
    private activeModal: NgbActiveModal,
    private moviesService: MoviesService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \-\']+')
      ])),
      category: ['', [Validators.required]],
      imdbLink: ['', [Validators.required, Validators.pattern(/http(|s):\/\/(?:.*\.|.*)imdb.com*/i)]],
      posterLink: ['', [Validators.required, Validators.pattern(/http(|s):\/\/(?:.*\.|.*)m.media-amazon.com\/images*/i)]],
    });
  }

  get formControls() { return this.form.controls; }

  close() {
    this.activeModal.close();
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.moviesService.addMovie({ ...this.form.value, createDate: new Date }).subscribe((data) => {
      this.callback.emit(data)
      this.close();
    }, error => {
      this.message = {
        type: 'error',
        text: error.error ? error.error.message : 'Not Login!'
      };
    }
    );
  }

}
