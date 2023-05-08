import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [AppComponent, ContadorComponent, CurrentTimeComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgxCaptchaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
