import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { OperationsListResponse } from "../types/operations.type";
import { OperationsListResponseMock } from "../mocks/operations-list-response.mock";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class operationService {

    constructor(private readonly _http: HttpClient){}

    getOperations(): Observable<OperationsListResponse> {
        return of(OperationsListResponseMock);
    }

    getUsers(): Observable<{name: string}[]>{
        return this._http.get<{name: string}[]>('https://jsonplaceholder.typicode.com/users');
    }
    
}