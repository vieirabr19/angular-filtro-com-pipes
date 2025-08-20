import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent {

  onSubmit(form: NgForm){
    console.log(form.value);

    const { usuario, profissao } = form.value;
    console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.idade} anos. Minha profissão é ${profissao.cargo} no setor ${profissao.setor}.`);
  }
}
