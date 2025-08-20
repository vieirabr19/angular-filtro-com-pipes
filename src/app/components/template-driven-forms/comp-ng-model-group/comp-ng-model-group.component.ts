import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comp-ng-model-group',
  templateUrl: './comp-ng-model-group.component.html',
  styleUrls: ['./comp-ng-model-group.component.scss']
})
export class CompNgModelGroupComponent {

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
