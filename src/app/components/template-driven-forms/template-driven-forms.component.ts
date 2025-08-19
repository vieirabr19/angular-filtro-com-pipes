import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit, AfterViewInit {
  @ViewChild('meuInputFormControl') inputEl!: NgModel;
  
  ngOnInit(){
    console.log('ngOnInit:', this.inputEl);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit:', this.inputEl);
  }

  send(){
    console.log('Enviado com sucesso!');
  }

}