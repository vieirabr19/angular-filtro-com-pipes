import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { operationService } from 'src/app/services/operations.service';
import { OperationsListResponse } from 'src/app/types/operations.type';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
searchTerm: string = '';
  operationsList$: Observable<OperationsListResponse> | undefined;

  constructor(
    private readonly _operationsService: operationService,
  ){}

  ngOnInit() {
    this.operationsList$ = this._operationsService.getOperations();
  }
}
