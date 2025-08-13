import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { OperationsListResponse } from "../types/operations.type";
import { OperationsListResponseMock } from "../mocks/operations-list-response.mock";

@Injectable({
    providedIn: 'root'
})
export class operationService {

    getOperations(): Observable<OperationsListResponse> {
        return of(OperationsListResponseMock);
    }
    
}