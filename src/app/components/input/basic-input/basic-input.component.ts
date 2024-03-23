import { Component, Input, Output, EventEmitter } from '@angular/core';

export type InputType =
  'button' | 'checkbox' | 'color' | 'date' | 'file' | 'email' |
  'hidden' | 'password' | 'radio' | 'range' | 'reset' | 'text';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
})

export class BasicInputComponent {
  //inputs and outputs
  @Input() inputType: InputType | undefined;
  @Input() inputLabel: string = '';
  @Input() textLabel: string = '';
  @Input() inputTouched?: true | false;
  @Input() inputPlaceholder?: string = '';
  @Input() inputId?: string = '';
  @Input() inputAutocomplete?: string = '';
  @Input() inputError?: true | false;
  @Input() inputErrorMessage?: string | null;
  @Input() inputRequired?: true | false;
  @Output() valueChange = new EventEmitter<string>();

  isToShowPass: boolean = false;

  constructor() { }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue);
  }

  showPass(isToShowPass: boolean) {
    this.isToShowPass = isToShowPass;
    this.isToShowPass ? this.inputType = 'text' : this.inputType = 'password'
  }
}
