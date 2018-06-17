import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

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
