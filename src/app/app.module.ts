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

@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    TemplateDrivenFormsComponent,
    CompInputComponent,
    CompSelectComponent,
    CompRadioButtonComponent
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
