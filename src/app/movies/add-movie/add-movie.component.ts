import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() allCategories: string[];
  @Input() exitsMoviesName: string[];
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \-\']+')
      ])),
      category: ['', [Validators.required]],
      imdbLink: ['', [Validators.required, Validators.pattern(/http:\/\/(?:.*\.|.*)imdb.com\/(?:t|T)itle(?:\?|\/)(..\d+)/i)]],
      posterLink: ['', [Validators.required, Validators.pattern(/http:\/\/(?:.*\.|.*)imdb.com\/(?:t|T)itle(?:\?|\/)(..\d+)/i)]],
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
    this.close();
  }

}
