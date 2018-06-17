import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userInput: string;

  @Input() name: string;
  @Input() isValid: boolean;
  
  @Output() model = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    
  }

  onKeyDown(e){
    this.model.emit(this.userInput);
  }

}
