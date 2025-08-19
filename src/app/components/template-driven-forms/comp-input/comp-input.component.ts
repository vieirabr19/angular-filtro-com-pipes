import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-comp-input',
  templateUrl: './comp-input.component.html',
  styleUrls: ['./comp-input.component.scss']
})
export class CompInputComponent implements OnInit, AfterViewInit {
  @ViewChild('meuInputFormControl') inputEl!: NgModel;

  ngOnInit() {
    // console.log('ngOnInit:', this.inputEl);
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit:', this.inputEl);
  }

  send() {
    console.log('Enviado com sucesso!');
  }
}
