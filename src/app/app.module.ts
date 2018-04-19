import { ChartService } from './shared/chart.service';
import { AppService } from './shared/app.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { AutoupdateComponent } from './autoupdate/autoupdate.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [AppComponent, HomeComponent, AutoupdateComponent, ChartsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [AppService,
  ChartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
