import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { ValidationHelper } from 'src/app/helpers/validation-helper';
import { CONST } from 'src/app/models/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: { name: string; password: string; email: string; };
  
  nameValid: boolean;
  emailValid: boolean;
  passwordValid: boolean; 

  constructor(
    private validationHelper: ValidationHelper,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
    this.user = { 
      name: "",
      password: "",
      email: ""
    };
    
    this.emailValid = false;
    this.passwordValid = false;
    this.nameValid = false;
  }

  isNameValid(e){
    // nothing was specified, setting max 50 char limit...
    if (e && e.length > 0 && e.length <= 50){
      this.nameValid = true;
      this.user.name = e;
    }
    else{
      this.nameValid = false;
    }
  }

  isEmailValid(e){
    if (this.validationHelper.emailIsValid(e)){
        this.emailValid = true;
        this.user.email = e;
    }
    else{
      this.emailValid = false;
    }
  }

  isPasswordValid(e){
    if (this.validationHelper.passwordIsValid(e)){
        this.passwordValid = true;
        this.user.password = e;
    }
    else{
      this.passwordValid = false;
    }
  }

  onForgottenClicked(){
    alert("Well, that's just too bad.");
  }

  onLoginClicked(){
    if (this.authService.login(this.user.name, this.user.email, this.user.password)){
      this.router.navigate([CONST.ROUTES.HOME]);
    }
  }
}
