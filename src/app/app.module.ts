import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component'
import { MaterialComponentsModule } from './modules/material-components/material-components.module';
import { UnitPipe } from './pipes/unit.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RaceComponent } from './components/race/race.component';
import { RacingPipe } from './pipes/racing.pipe';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    PoneyCreateComponent,
    UnitPipe,
    OrderByPipe,
    RaceComponent,
    RacingPipe,
    RaceListComponent,
    RaceCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
