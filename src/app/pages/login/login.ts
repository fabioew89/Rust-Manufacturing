import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formBuilder = inject(FormBuilder);

  formLogin = this.formBuilder.group({
    login: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  get isFormLoginInvalid(): boolean {
    const login = this.formLogin.get('login')
    const password = this.formLogin.get('password')

    const isLoginInvalid = login?.invalid && login?.touched;
    const isPasswordInvalid = password?.invalid && password?.touched;

    return !!(isLoginInvalid || isPasswordInvalid)
  }
}
