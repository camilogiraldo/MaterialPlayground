import { Observable } from 'rxjs/Observable';
import { AppService } from './../shared/app.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-autoupdate',
  templateUrl: './autoupdate.component.html',
  styleUrls: ['./autoupdate.component.css']
})
export class AutoupdateComponent implements OnInit {
  checked = false;
  commentsSubscription: Subscription;
  timerSubscription: Subscription;
  count = 0;
  response;
  constructor(private appService:AppService) { }

  ngOnInit() {
  }

  onChecked() {
    this.checked = !this.checked;
    this.refreshData();
    console.log(this.checked);
  }

  private refreshData(): void {
    if (this.checked) {
      this.commentsSubscription = this.appService
        .getComments()
        .subscribe(data => {
          this.count++;
          this.response = data;
          console.log('taken', data);
          this.subscribeToData();
        });
    }
  }

  private subscribeToData(): void {
    this.timerSubscription = Observable.timer(5000).subscribe(() =>
      this.refreshData()
    );
  }
}
