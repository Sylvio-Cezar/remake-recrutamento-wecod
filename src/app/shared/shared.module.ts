import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../components/card/card.component';
import { ButtonPrimaryComponent } from '../components/buttons/button-primary/button-primary.component';
import { FormComponent } from '../components/form/form.component';
import { ButtonOutlineComponent } from '../components/buttons/button-outline/button-outline.component';
import { BasicInputComponent } from '../components/input/basic-input/basic-input.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonOutlineComponent,
    CardComponent,
    FormComponent,
    BasicInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    ButtonPrimaryComponent,
    ButtonOutlineComponent,
    CardComponent,
    FormComponent,
    BasicInputComponent
  ]
})
export class SharedModule { }
