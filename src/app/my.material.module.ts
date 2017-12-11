
import { NgModule } from '@angular/core';
import {MatCheckboxModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: []
})
export class MyMaterialModule { }
