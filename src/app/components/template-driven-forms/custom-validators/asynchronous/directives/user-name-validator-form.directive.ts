import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

import { operationService } from 'src/app/services/operations.service';

@Directive({
  selector: '[appUserNameValidatorForm]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UserNameValidatorFormDirective),
      multi: true,
    },
  ],
})
export class UserNameValidatorFormDirective implements AsyncValidator {

  constructor(
    private readonly _operationsService: operationService
  ){}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    if(!control.dirty) return of(null);

    return this._operationsService.getUsers().pipe(
      delay(3000),
      map(users => {
        const existing = users.find(user => user.name === control.value);

        if(existing) return null;

        return { invalidUserName: true }
      })
    );
  }

}
