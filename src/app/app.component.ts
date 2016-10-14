import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard/dashboard.service';
import { NewsWidgetComponent } from './widgets/news-widget.component';

import { Model } from './dashboard'
import { Observable } from 'rxjs';
import { AppService } from './app.service';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Dashboard Application';

  model: Model;
  error: string;

  constructor(private appService : AppService, private dashboardService: DashboardService){}

  ngOnInit() {
    // register widgets
    this.dashboardService.register("news", NewsWidgetComponent);

    // fetch model
    this.appService.getModel().subscribe(
      model => this.model = model,
      error => this.error = error
    );
  }
}