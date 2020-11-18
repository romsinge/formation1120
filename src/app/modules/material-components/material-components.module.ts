import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatInputModule, 
  MatListModule, 
  MatSelectModule, 
  MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule
  ]
})
export class MaterialComponentsModule { }
