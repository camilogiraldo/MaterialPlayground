import { AppService } from './../shared/app.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith, map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputAutoField: FormControl = new FormControl();
  formGroup: FormGroup;
  options = [];
  filteredOptions: Observable<string[]>;
  searchTerm$ = new Subject<string>();

  constructor(private appService: AppService) {
    this.appService.search(this.searchTerm$).subscribe(
      data => {
        this.options = data.securities.security;
        console.log(this.options);
        this.filteredOptions = this.inputAutoField.valueChanges.pipe(
          startWith(''),
          map(val => this.filter(val))
        );
      },
      error => {
        console.log('not found');
      }
    );
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      input: this.inputAutoField
    });
  }

  onChange(event) {
    // const filter = event.target.value;
    // this.searchTerm$.next(filter);
  }

  filter(val: string): string[] {
    return this.options.filter(
      option => option['symbol'].toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
