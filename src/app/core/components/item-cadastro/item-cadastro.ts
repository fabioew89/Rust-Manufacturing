import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.html',
  styleUrls: ['./item-cadastro.css']
})
export class ItemCadastroComponent {

  constructor(private router: Router) { }

  voltar(): void {
    this.router.navigate(['/']);
  }

  cancelar(): void {
    this.voltar();
  }

  criarItem(): void {
    console.log('Item criado com sucesso!');
  }
}