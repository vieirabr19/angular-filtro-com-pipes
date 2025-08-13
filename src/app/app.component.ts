import { Component, OnInit } from '@angular/core';

import { OperationsListResponse } from './types/operations.type';
import { operationService } from './services/operations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  operationsList$: Observable<OperationsListResponse> | undefined;

  constructor(
    private readonly _oprationsService: operationService,
  ){}

  ngOnInit() {
    this.operationsList$ = this._oprationsService.getOperations();
  }
}