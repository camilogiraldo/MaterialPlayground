import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';
import { map, startWith } from 'rxjs/operators';
import { AppService } from './../shared/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputAutoField: FormControl = new FormControl();
  formGroup: FormGroup;
  options = [];
  response;
  count = 0;
  filteredOptions: Observable<string[]>;
  searchTerm$ = new Subject<string>();
  checked = false;

  constructor(private appService: AppService) {
    this.createSearchSubscription();
  }

  createSearchSubscription() {
    this.appService.search(this.searchTerm$).subscribe(
      data => {
        this.options = data['securities']['security'];
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

  filter(val: string): string[] {
    return this.options.filter(
      option => option['symbol'].toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
