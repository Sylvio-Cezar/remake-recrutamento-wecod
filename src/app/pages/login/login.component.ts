import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserModel } from 'src/app/models/user.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  @BlockUI() blockUI!: NgBlockUI;

  formData: UserModel = {} as UserModel;
  emailError?: string | null;
  passError?: string | null;
  emailTouched: boolean = false;
  passTouched: boolean = false;

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
  }

  submitLogin() {
    this.blockUI.start('Carregando...');
    this.messageService.successMessage('Sucesso ao realizar login');
    this.router.navigate(['/dashboard/home']);
    this.blockUI.stop();
  }

  isEmailTouched() {
    this.emailTouched = true;
  }

  isPassTouched() {
    this.passTouched = true;
  }

  getInputEmail(email: string) {
    this.formData.email = email;
    this.isInvalidEmail();
  }

  getInputPass(password: string) {
    this.formData.password = password;
    this.isInvalidPass();
  }

  isInvalidEmail() {
    let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (this.formData.email && pattern.test(this.formData.email)) {
      this.emailError = null;
      return false;
    } else {
      if (!this.formData.email) {
        this.emailError = "O email é obrigatório";
      } else {
        this.emailError = "O email inserido é inválido";
      }
      return true;
    }
  }

  isInvalidPass() {
    if (this.formData.password && this.formData.password.length >= 6) {
      this.passError = null;
      return false;
    } else {
      if (!this.formData.password) {
        this.passError = "A senha é obrigatória";
      } else {
        this.passError = "A senha precisa ter pelo menos 6 caracteres";
      }
      return true;
    }
  }

  isInvalidLogin() {
    if (this.isInvalidEmail() || this.isInvalidPass()) {
      return true;
    } else {
      return false;
    }
  }
}
