import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-profission',
  templateUrl: './form-profission.component.html',
  styleUrls: ['./form-profission.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormProfissionComponent {

}
