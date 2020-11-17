import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component'
import { MaterialComponentsModule } from './modules/material-components/material-components.module';



@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    PoneyCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
