// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from './modules/account/account.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccountModule,
    AppRoutingModule,
    DashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
