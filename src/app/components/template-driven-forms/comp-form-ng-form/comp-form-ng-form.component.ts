import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comp-form-ng-form',
  templateUrl: './comp-form-ng-form.component.html',
  styleUrls: ['./comp-form-ng-form.component.scss']
})
export class CompFormNgFormComponent implements AfterViewInit {

  @ViewChild('meuForm') formEl!: NgForm;

  nome: string = 'Luiz';
  texto: string = 'Texto 1';
  statusSelected: string = 'ativo';
  termos: boolean = true;

  ngAfterViewInit() {
    // console.log(this.formEl.value);
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

  onReset(form: NgForm){
    form.reset();
    
    console.log(form.value);

    console.log(this.nome);
    console.log(this.texto);
    console.log(this.statusSelected);
    console.log(this.termos);
  }
}
