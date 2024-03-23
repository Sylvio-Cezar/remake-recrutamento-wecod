import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input() typeBtn: 'submit' | 'reset' | 'button' | undefined;
  @Input() textBtn: string = '';
  @Input() disabledBtn?: true | false;
  @Input() nameBtn?: string;
  @Input() idBtn?: string;
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.idBtn)
  }

}
