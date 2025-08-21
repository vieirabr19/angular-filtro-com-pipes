import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';

registerLocaleData(pt, 'pt-BR');

import { AppComponent } from './app.component';
import { StatusModule } from './pipes/status.module';
import { FormsModule } from '@angular/forms';
import { OperationsComponent } from './components/operations/operations.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { CompInputComponent } from './components/template-driven-forms/comp-input/comp-input.component';
import { CompSelectComponent } from './components/template-driven-forms/comp-select/comp-select.component';
import { CompRadioButtonComponent } from './components/template-driven-forms/comp-radio-button/comp-radio-button.component';
import { CompFormNgFormComponent } from './components/template-driven-forms/comp-form-ng-form/comp-form-ng-form.component';
import { CompNgModelGroupComponent } from './components/template-driven-forms/comp-ng-model-group/comp-ng-model-group.component';
import { FormProfissionComponent } from './components/template-driven-forms/form-with-children/form-profission/form-profission.component';
import { FormUserComponent } from './components/template-driven-forms/form-with-children/form-user/form-user.component';
import { FormMainComponent } from './components/template-driven-forms/form-with-children/form-main/form-main.component';
import { CustomValidatorFormEx1Component } from './components/template-driven-forms/custom-validators/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './components/template-driven-forms/custom-validators/ex1/directives/invalid-text-validator.directive';
import { CustomValidatorFormEx2Component } from './components/template-driven-forms/custom-validators/ex2/custom-validator-form-ex2/custom-validator-form-ex2.component';
import { DepartamentQuantityValidatorDirective } from './components/template-driven-forms/custom-validators/ex2/directives/departament-quantity-validator.directive';
import { AsyncCustomValidatorComponent } from './components/template-driven-forms/custom-validators/asynchronous/async-custom-validator/async-custom-validator.component';
import { UserNameValidatorFormDirective } from './components/template-driven-forms/custom-validators/asynchronous/directives/user-name-validator-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    TemplateDrivenFormsComponent,
    CompInputComponent,
    CompSelectComponent,
    CompRadioButtonComponent,
    CompFormNgFormComponent,
    CompNgModelGroupComponent,
    FormProfissionComponent,
    FormUserComponent,
    FormMainComponent,
    CustomValidatorFormEx1Component,
    InvalidTextValidatorDirective,
    CustomValidatorFormEx2Component,
    DepartamentQuantityValidatorDirective,
    AsyncCustomValidatorComponent,
    UserNameValidatorFormDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StatusModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: {
        dateFormat: 'dd/MM/yyyy',
        // timezone: '+0000'
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
