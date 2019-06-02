import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
    driverData;

    constructor(
        private http: HttpClient,
    ) {}

    storeFirstStep(data) {
        this.driverData = data;
    }

    getStoredData() {
        return this.driverData;
    }

    registerDriver(data) {
        return this.http.post('http://localhost:3000/driver', data);
    }
}
